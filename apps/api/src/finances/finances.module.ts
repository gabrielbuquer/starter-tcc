import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FinancesService } from './finances.service';
import { FinancesController } from './finances.controller';
import { FinancesSeed } from './finances.seed';
import { Category } from './entities/category.entity';
import { Transaction } from './entities/transaction.entity';
import Goal from './entities/goal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([Transaction]),
    TypeOrmModule.forFeature([Goal]),
  ],
  controllers: [FinancesController],
  providers: [FinancesService, FinancesSeed],
})
export class FinancesModule {}
