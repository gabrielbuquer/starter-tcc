import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryExpense } from './entities/category-expense.entity';
import { CategoryIncome } from './entities/category-income.entity copy';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(CategoryExpense)
    private readonly categoryExpenseRepository: Repository<CategoryExpense>,
    @InjectRepository(CategoryIncome)
    private readonly categoryIncomeRepository: Repository<CategoryIncome>
  ) {}

  async getExpenseCategories(): Promise<CategoryExpense[]> {
    return this.categoryExpenseRepository.find();
  }

  async getExpenseCategoryById(id: string): Promise<CategoryExpense> {
    const category = await this.categoryExpenseRepository.findOne({
      where: { id },
    });
    if (!category) {
      throw new Error(`Category with id ${id} not found`);
    }
    return category;
  }

  async getIncomeCategories(): Promise<CategoryIncome[]> {
    return this.categoryIncomeRepository.find();
  }

  async getIncomeCategoryById(id: string): Promise<CategoryIncome> {
    const category = await this.categoryIncomeRepository.findOne({
      where: { id },
    });
    if (!category) {
      throw new Error(`Category with id ${id} not found`);
    }
    return category;
  }

  async createExpenseCategory(
    category: Partial<CategoryExpense>
  ): Promise<CategoryExpense> {
    const newCategory = this.categoryExpenseRepository.create(category);
    return this.categoryExpenseRepository.save(newCategory);
  }

  async createIncomeCategory(
    category: Partial<CategoryIncome>
  ): Promise<CategoryIncome> {
    const newCategory = this.categoryIncomeRepository.create(category);
    return this.categoryIncomeRepository.save(newCategory);
  }
}
