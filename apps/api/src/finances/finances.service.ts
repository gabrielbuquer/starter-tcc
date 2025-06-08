import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';
import { Repository, SelectQueryBuilder } from 'typeorm';

import { round2 } from '../common/number.utils';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionDto } from './dto/filter-transaction.dto';
import GoalsProgressDto from './dto/goals-progress.dto';
import OverviewDTO from './dto/overview.transaction.dto';
import { PaginatedWithResumeGoalsDTO } from './dto/resume.goals.dto';
import { PaginatedWithResumeDto } from './dto/resume.transaction.dto';
import { UpdateTransactionDTO } from './dto/update-transaction.dto';
import { Category, CategoryType } from './entities/category.entity';
import Goal from './entities/goal.entity';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Goal)
    private readonly goalRepository: Repository<Goal>,
  ) {}

  async getCategories(type: CategoryType): Promise<Category[]> {
    return this.categoryRepository.find({ where: { type } });
  }

  async getOverview(userId: string): Promise<OverviewDTO> {
    const incomeQuery = this.transactionRepository
      .createQueryBuilder('t')
      .select([
        'c.id AS categoryId',
        'c.description AS categoryName',
        'SUM(t.value) AS totalValue',
      ])
      .leftJoin('t.category', 'c')
      .where('t.studentId = :userId', { userId })
      .andWhere('t.type = :type', { type: 'income' })
      .groupBy('c.id');

    const expenseQuery = this.transactionRepository
      .createQueryBuilder('t')
      .select([
        'c.id AS categoryId',
        'c.description AS categoryName',
        'SUM(t.value) AS totalValue',
      ])
      .leftJoin('t.category', 'c')
      .where('t.studentId = :userId', { userId })
      .andWhere('t.type = :type', { type: 'expense' })
      .groupBy('c.id');

    const [incomes, expenses] = await Promise.all([
      incomeQuery.getRawMany(),
      expenseQuery.getRawMany(),
    ]);

    const totalIncome = incomes.reduce(
      (sum, item) => sum + Number(item.totalvalue),
      0,
    );
    const totalExpense = expenses.reduce(
      (sum, item) => sum + Number(item.totalvalue),
      0,
    );

    const incomeMonth = await this.getIncomeMonth(userId);
    const expenseMonth = await this.getExpenseMonth(userId);
    const totalMonth = incomeMonth - expenseMonth;

    return {
      amount: totalIncome - totalExpense,
      amountMonth: totalMonth,
      incomeMonth,
      expenseMonth,
      incomes: incomes.map((item) => ({
        category: {
          id: item.categoryid,
          description: item.categoryname,
          type: 'income',
        },
        value: Number(item.totalvalue),
      })),
      expenses: expenses.map((item) => ({
        category: {
          id: item.categoryid,
          description: item.categoryname,
          type: 'expense',
        },
        value: Number(item.totalvalue),
      })),
      totals: await this.resumeMonth(userId),
      balances: await this.resumeDiff(userId),
    };
  }

  async resumeMonth(
    userId: string,
  ): Promise<{ month: string; value: number; type: 'expense' | 'income' }[]> {
    const query = this.transactionRepository
      .createQueryBuilder('t')
      .select([
        "TO_CHAR(t.date, 'YYYY-MM') AS month",
        't.type AS type',
        'SUM(t.value) AS totalValue',
      ])
      .where('t.studentId = :userId', { userId })
      .andWhere(
        "t.date >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '5 months'",
      )
      .groupBy("TO_CHAR(t.date, 'YYYY-MM')")
      .addGroupBy('t.type')
      .orderBy("TO_CHAR(t.date, 'YYYY-MM')", 'ASC');

    const result = await query.getRawMany();

    return result.map((row) => ({
      month: row.month,
      value: round2(Number(row.totalvalue)),
      type: row.type,
    }));
  }

  async resumeDiff(
    userId: string,
  ): Promise<{ month: string; value: number }[]> {
    const query = this.transactionRepository
      .createQueryBuilder('t')
      .select([
        "TO_CHAR(t.date, 'YYYY-MM') AS month",
        't.type AS type',
        'SUM(t.value) AS totalValue',
      ])
      .where('t.studentId = :userId', { userId })
      .andWhere(
        "t.date >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '5 months'",
      )
      .groupBy("TO_CHAR(t.date, 'YYYY-MM')")
      .addGroupBy('t.type')
      .orderBy("TO_CHAR(t.date, 'YYYY-MM')", 'ASC');

    const result = await query.getRawMany();

    const monthMap = new Map<string, { income: number; expense: number }>();

    result.forEach((row) => {
      const month = row.month;
      const type = row.type;
      const value = Number(row.totalvalue) || 0;

      if (!monthMap.has(month)) {
        monthMap.set(month, { income: 0, expense: 0 });
      }

      const current = monthMap.get(month)!;
      if (type === 'income') {
        current.income += value;
      } else if (type === 'expense') {
        current.expense += value;
      }
    });

    const resumeDiff = Array.from(monthMap.entries()).map(
      ([month, { income, expense }]) => ({
        month,
        value: income - expense,
      }),
    );

    return resumeDiff;
  }

  async getIncomeMonth(userId: string): Promise<number> {
    const query = this.transactionRepository
      .createQueryBuilder('t')
      .select('SUM(t.value)', 'totalIncome')
      .where('t.studentId = :userId', { userId })
      .andWhere('t.type = :type', { type: 'income' })
      .andWhere("DATE_TRUNC('month', t.date) = DATE_TRUNC('month', NOW())");
    const result = await query.getRawOne();
    return Number(result.totalIncome) || 0;
  }
  async getExpenseMonth(userId: string): Promise<number> {
    const query = this.transactionRepository
      .createQueryBuilder('t')
      .select('SUM(t.value)', 'totalExpense')
      .where('t.studentId = :userId', { userId })
      .andWhere('t.type = :type', { type: 'expense' })
      .andWhere("DATE_TRUNC('month', t.date) = DATE_TRUNC('month', NOW())");
    const result = await query.getRawOne();
    return Number(result.totalExpense) || 0;
  }

  async getCategoryById(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new Error(`Category with id ${id} not found`);
    }
    return category;
  }

  async createCategory(category: Partial<Category>): Promise<Category> {
    const newCategory = this.categoryRepository.create(category);
    return this.categoryRepository.save(newCategory);
  }

  async createTransaction(userId: string, transaction: CreateTransactionDto) {
    const category = await this.getCategoryById(transaction.categoryId);
    if (!category) {
      throw new Error(`Category with id ${transaction.categoryId} not found`);
    }
    const newTransaction = this.transactionRepository.create({
      ...transaction,
      category,
      student: { id: userId },
    });
    return this.transactionRepository.save(newTransaction);
  }

  async updateTransaction(
    userId: string,
    id: string,
    updateTransaction: CreateTransactionDto,
  ) {
    const transaction = await this.transactionRepository.findOne({
      where: {
        id,
        student: {
          id: userId,
        },
      },
    });
    if (!transaction) {
      throw new Error(`Transaction not found with id ${id}`);
    }

    if (updateTransaction.categoryId !== undefined) {
      const category = await this.getCategoryById(updateTransaction.categoryId);
      if (!category) {
        throw new Error(
          `Category with id ${updateTransaction.categoryId} not found`,
        );
      }
      transaction.category = category;
    }
    const { categoryId, ...otherFields } = updateTransaction;

    Object.assign(transaction, otherFields);
    transaction.student = { id: userId } as any;
    return this.transactionRepository.save(transaction);
  }

  async getTransactions(
    userId: string,
    filter: FilterTransactionDto,
    page: number,
    limit: number,
  ): Promise<PaginatedWithResumeDto<Transaction>> {
    const applyFilters = (
      query: SelectQueryBuilder<Transaction>,
      alias = 'transaction',
      actualFilter: FilterTransactionDto = filter,
    ): SelectQueryBuilder<Transaction> => {
      if (actualFilter.type) {
        query.andWhere(`${alias}.type = :type`, { type: actualFilter.type });
      }

      if (actualFilter['start-date']) {
        query.andWhere(`${alias}.date >= :startDate`, {
          startDate: actualFilter['start-date'],
        });
      }

      if (actualFilter['end-date']) {
        query.andWhere(`${alias}.date <= :endDate`, {
          endDate: actualFilter['end-date'],
        });
      }

      return query;
    };

    const queryBuilder = this.transactionRepository
      .createQueryBuilder('transaction')
      .leftJoinAndSelect('transaction.category', 'category')
      .where('transaction.studentId = :userId', { userId })
      .orderBy('transaction.date', 'DESC');

    applyFilters(queryBuilder);

    const paginated = await paginate<Transaction>(queryBuilder, {
      page,
      limit,
    });

    const resumeQuery = this.transactionRepository
      .createQueryBuilder('t')
      .select([
        "SUM(CASE WHEN t.type = 'income' THEN t.value ELSE 0 END) AS totalIncome",
        "SUM(CASE WHEN t.type = 'expense' THEN t.value ELSE 0 END) AS totalExpense",
      ])
      .where('t.studentId = :userId', { userId });

    filter.type = null;
    applyFilters(resumeQuery, 't', filter);

    const resumeRaw = await resumeQuery.getRawOne();

    const totalIncome = Number(resumeRaw['totalincome']) || 0;
    const totalExpense = Number(resumeRaw['totalexpense']) || 0;

    return {
      ...paginated,
      resume: {
        totalIncome,
        totalExpense,
        amount: totalIncome - totalExpense,
      },
    };
  }

  async deleteTransaction(userId: string, id: string) {
    const transaction = await this.transactionRepository.findOne({
      where: { id, student: { id: userId } },
    });

    if (!transaction) {
      throw new Error(`Transaction with id ${id} not found`);
    }

    await this.transactionRepository.remove(transaction);
  }

  async createGoal(userId: string, categoryId: string, value: number) {
    const category = await this.getCategoryById(categoryId);
    const goal = this.goalRepository.create({
      value,
      student: { id: userId },
      date: new Date(),
      category,
    });
    this.goalRepository.save(goal);
  }

  async getGoalInMonth(
    userId: string,
    type: 'expense' | 'income' | undefined,
    page = 1,
    limit = 10,
  ): Promise<Pagination<Goal>> {
    const query = this.goalRepository
      .createQueryBuilder('goal')
      .leftJoinAndSelect('goal.category', 'category')
      .where('goal.studentId = :userId', { userId })
      .andWhere("DATE_TRUNC('month', goal.date) = DATE_TRUNC('month', NOW())");

    if (type) {
      query.andWhere('category.type = :type', { type });
    }

    const paginated = await paginate<Goal>(query, {
      page,
      limit,
    });

    return paginated;
  }

  async getProgressGoals(
    userId: string,
    type: 'expense' | 'income',
    page = 1,
    limit = 10,
  ): Promise<PaginatedWithResumeGoalsDTO<GoalsProgressDto>> {
    console.log('type', type);
    const query = this.goalRepository
      .createQueryBuilder('goal')
      .leftJoinAndSelect('goal.category', 'category')
      .where('goal.studentId = :userId', { userId });

    if (type) {
      query.andWhere('category.type = :type', { type });
    }

    const paginated = await paginate<Goal>(query, {
      page,
      limit,
    });

    const goalsProgress: GoalsProgressDto[] = await Promise.all(
      paginated.items.map(async (item) => {
        {
          const realizedFromCategory = await this.getValueFromCategory(
            userId,
            item.category.id,
          );
          return {
            id: item.id,
            category: {
              id: item.category.id,
              description: item.category.description,
            },
            realized: realizedFromCategory,
            planed: round2(Number(item.value)),
            progress: round2((realizedFromCategory / Number(item.value)) * 100),
            diff: round2(realizedFromCategory - Number(item.value)),
          };
        }
      }),
    );

    const totalGoals = await this.getSumOfGoals(userId, type);
    const totalActual = await this.getTotal(userId, type);

    return {
      ...paginated,
      items: goalsProgress,
      resume: {
        goals: round2(totalGoals),
        actual: round2(totalActual),
        diff: round2(totalActual - totalGoals),
      },
    };
  }

  async getTotal(userId: string, type?: 'expense' | 'income' | undefined) {
    const query = this.transactionRepository
      .createQueryBuilder('t')
      .select('SUM(t.value)', 'totalValue')
      .leftJoin('t.category', 'category')
      .where('t.studentId = :userId', { userId })
      .andWhere("DATE_TRUNC('month', t.date) = DATE_TRUNC('month', NOW())");

    if (type) {
      query.andWhere('category.type = :type', { type });
    }

    const result = await query.getRawOne();
    return Number(result.totalValue) || 0;
  }

  async getSumOfGoals(
    userId: string,
    type?: 'expense' | 'income' | undefined,
  ): Promise<number> {
    const query = this.goalRepository
      .createQueryBuilder('goal')
      .select('SUM(goal.value)', 'totalValue')
      .leftJoin('goal.category', 'category')
      .where('goal.studentId = :userId', { userId });

    if (type) {
      query.andWhere('category.type = :type', { type });
    }

    const result = await query.getRawOne();
    return Number(result.totalValue) || 0;
  }

  async getValueFromCategory(
    userId: string,
    categoryId: string,
  ): Promise<number> {
    const query = this.transactionRepository
      .createQueryBuilder('t')
      .select('SUM(t.value)', 'totalValue')
      .where('t.studentId = :userId', { userId })
      .andWhere('t.categoryId = :categoryId', { categoryId })
      .andWhere("DATE_TRUNC('month', t.date) = DATE_TRUNC('month', NOW())");

    const result = await query.getRawOne();
    return Number(result.totalValue) || 0;
  }

  async deleteGoal(userId: string, id: string) {
    const goal = await this.goalRepository.findOne({
      where: { id, student: { id: userId } },
    });

    if (!goal) {
      throw new Error(`Transaction with id ${id} not found`);
    }

    await this.goalRepository.remove(goal);
  }
}
