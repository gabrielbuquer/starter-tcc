import { Injectable, OnModuleInit } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryExpense } from './entities/category-expense.entity';
import { CategoryIncome } from './entities/category-income.entity copy';
import { Repository } from 'typeorm';

@Injectable()
export class FinancesSeed implements OnModuleInit {
  constructor(
    private readonly financesService: FinancesService,
    @InjectRepository(CategoryExpense)
    private readonly expenseCategoryRepository: Repository<CategoryExpense>,
    @InjectRepository(CategoryIncome)
    private readonly incomeCategoryRepository: Repository<CategoryIncome>
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    await this.seedExpenseCategory({
      id: '35ee31ea-cbb3-4d89-a3e0-b58230172689',
      description: 'Comida',
    });

    await this.seedExpenseCategory({
      id: '48022b04-7c8d-4197-a1cd-5f72bb6ee6e2',
      description: 'Transporte',
    });

    await this.seedIncomeCategory({
      id: '1c673fbd-a444-4622-8627-630f32743f61',
      description: 'Salário',
    });

    await this.seedIncomeCategory({
      id: '6a2a3961-aea5-4e1c-b20f-3c1c4b5c8502',
      description: 'Freelancer',
    });
  }

  private async seedExpenseCategory(category: {
    id: string;
    description: string;
  }) {
    try {
      await this.financesService.getExpenseCategoryById(category.id);
      console.log(`Categoria de despesa "${category.description}" já existe.`);
    } catch {
      await this.expenseCategoryRepository.save(category);
      console.log(`Categoria de despesa "${category.description}" criada.`);
    }
  }

  private async seedIncomeCategory(category: {
    id: string;
    description: string;
  }) {
    try {
      await this.financesService.getIncomeCategoryById(category.id);
      console.log(`Categoria de receita "${category.description}" já existe.`);
    } catch {
      await this.incomeCategoryRepository.save(category);
      console.log(`Categoria de receita "${category.description}" criada.`);
    }
  }
}
