import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { Response } from 'express';

import { GetSub } from '../auth/decorator/get-sub';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { FilterTransactionDto } from './dto/filter-transaction.dto';
import { FinancesMapper } from './finances.mapper';
import { FinancesService } from './finances.service';

@Controller('/api/finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  @Get(':type/categories')
  @ApiParam({
    name: 'type',
    enum: ['expense', 'income'],
    description:
      'Tipo de categoria: "expense" para despesas, "income" para receitas',
  })
  async getCategories(@Param('type') type: 'expense' | 'income') {
    const categories = await this.financesService.getCategories(type);
    return FinancesMapper.mapCategories(categories);
  }

  @Post()
  @ApiParam({ name: 'id', description: 'ID do usuário' })
  @ApiBody({ type: CreateTransactionDto })
  async createTransaction(
    @Res() res: Response,
    @GetSub() userId: string,
    @Body() body: CreateTransactionDto,
  ) {
    await this.financesService.createTransaction(userId, body);
    res.status(HttpStatus.CREATED).send();
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID da transação' })
  async deleteTransaction(
    @Res() res: Response,
    @GetSub() userId: string,
    @Param('id') id: string,
  ) {
    await this.financesService.deleteTransaction(userId, id);
    res.status(HttpStatus.NO_CONTENT).send();
  }

  @Get()
  @ApiBody({ type: CreateTransactionDto })
  async getTransactions(
    @GetSub() userId: string,
    page: 1,
    limit: 10,
    @Query() filter: FilterTransactionDto,
  ) {
    return await this.financesService.getTransactions(
      userId,
      filter,
      page,
      limit,
    );
  }

  @Get('overview')
  async getOverview(@GetSub() userId: string) {
    return await this.financesService.getOverview(userId);
  }

  @Get(':type/:id')
  @ApiParam({
    name: 'type',
    enum: ['expense', 'income'],
    description:
      'Tipo de categoria: "expense" para despesas, "income" para receitas',
  })
  async getCategoryById(
    @Param('type') type: 'expense' | 'income',
    @Param('id') id: string,
  ) {
    const category = await this.financesService.getCategoryById(id);
    return FinancesMapper.mapCategory(category);
  }
}
