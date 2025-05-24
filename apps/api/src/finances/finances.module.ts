import { Module } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { FinancesController } from './finances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesSeed } from './finances.seed';
import { Category } from './entities/category.entity';
import { Transaction } from './entities/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([Transaction]),
  ],
  controllers: [FinancesController],
  providers: [FinancesService, FinancesSeed],
})
export class FinancesModule {}
