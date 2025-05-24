import { Module } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { FinancesController } from './finances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryExpense } from './entities/category-expense.entity';
import { CategoryIncome } from './entities/category-income.entity copy';
import { FinancesSeed } from './finances.seed';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryExpense]),
    TypeOrmModule.forFeature([CategoryIncome]),
  ],
  controllers: [FinancesController],
  providers: [FinancesService, FinancesSeed],
})
export class FinancesModule {}
