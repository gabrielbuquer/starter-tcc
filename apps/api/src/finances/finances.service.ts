import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category, CategoryType } from './entities/category.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

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
}
