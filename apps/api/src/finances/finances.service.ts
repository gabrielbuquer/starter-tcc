import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';

import { Category, CategoryType } from './entities/category.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { PaginatedWithResumeDto } from './dto/resume.transaction.dto';
import { FilterTransactionDto } from './dto/filter-transaction.dto';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getCategories(type: CategoryType): Promise<Category[]> {
    return this.categoryRepository.find({ where: { type } });
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
    limit: number,
  ): Promise<PaginatedWithResumeDto<Transaction>> {
    const applyFilters = (
      query: SelectQueryBuilder<Transaction>,
      alias = 'transaction',
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
