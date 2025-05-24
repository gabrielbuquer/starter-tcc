import { Controller, Get, Param } from '@nestjs/common';
import { FinancesMapper } from './finances.mapper';
import { FinancesService } from './finances.service';
import { ApiParam } from '@nestjs/swagger';

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

  @Get(':type/:id')
  @ApiParam({
    name: 'type',
    enum: ['expense', 'income'],
    description:
      'Tipo de categoria: "expense" para despesas, "income" para receitas',
  })
  async getCategoryById(
    @Param('type') type: 'expense' | 'income',
    @Param('id') id: string
  ) {
    const category = await this.financesService.getCategoryById(id);
    return FinancesMapper.mapCategory(category);
  }
}
