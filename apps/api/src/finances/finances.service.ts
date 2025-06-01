import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Category, CategoryType } from './entities/category.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { PaginatedWithResumeDto } from './dto/resume.transaction.dto';
import { FilterTransactionDto } from './dto/filter-transaction.dto';
import OverviewDTO from './dto/overview.transaction.dto';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
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
      0
    );
    const totalExpense = expenses.reduce(
      (sum, item) => sum + Number(item.totalvalue),
      0
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
    };
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

  async getTransactions(
    userId: string,
    filter: FilterTransactionDto,
    page: number,
    limit: number
  ): Promise<PaginatedWithResumeDto<Transaction>> {
    const applyFilters = (
      query: SelectQueryBuilder<Transaction>,
      alias = 'transaction'
    ): SelectQueryBuilder<Transaction> => {
      if (filter.type) {
        query.andWhere(`${alias}.type = :type`, { type: filter.type });
      }

      if (filter['start-date']) {
        query.andWhere(`${alias}.date >= :startDate`, {
          startDate: filter['start-date'],
        });
      }

      if (filter['end-date']) {
        query.andWhere(`${alias}.date <= :endDate`, {
          endDate: filter['end-date'],
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

    applyFilters(resumeQuery, 't');

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
}
