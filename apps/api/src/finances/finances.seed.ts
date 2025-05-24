import { Injectable, OnModuleInit } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Category, CategoryType } from './entities/category.entity';

@Injectable()
export class FinancesSeed implements OnModuleInit {
  constructor(
    private readonly financesService: FinancesService,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    await this.seedCategory({
      id: '35ee31ea-cbb3-4d89-a3e0-b58230172689',
      description: 'Comida',
      type: 'expense',
    });

    await this.seedCategory({
      id: '48022b04-7c8d-4197-a1cd-5f72bb6ee6e2',
      description: 'Transporte',
      type: 'expense',
    });

    await this.seedCategory({
      id: '1c673fbd-a444-4622-8627-630f32743f61',
      description: 'Salário',
      type: 'income',
    });

    await this.seedCategory({
      id: '6a2a3961-aea5-4e1c-b20f-3c1c4b5c8502',
      description: 'Freelancer',
      type: 'income',
    });
  }

  private async seedCategory(category: {
    id: string;
    description: string;
    type: CategoryType;
  }) {
    try {
      await this.financesService.getCategoryById(category.id);
      console.log(
        `Categoria "${category.description}" (${category.type}) já existe.`
      );
    } catch {
      await this.categoryRepository.save(category);
      console.log(
        `Categoria "${category.description}" (${category.type}) criada.`
      );
    }
  }
}
