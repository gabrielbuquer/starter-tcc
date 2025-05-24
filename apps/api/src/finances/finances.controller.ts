import { Controller, Get } from '@nestjs/common';
import { FinancesService } from './finances.service';
import { FinancesMapper } from './finances.mapper';

@Controller('/api/finances')
export class FinancesController {
  constructor(private readonly financesService: FinancesService) {}

  @Get('/expenses/categories')
  async getExpenseCategories() {
    const categories = await this.financesService.getExpenseCategories();
    return FinancesMapper.mapCategories(categories);
  }

  @Get('/expenses/categories/:id')
  async getExpenseCategoryById(id: string) {
    const category = await this.financesService.getExpenseCategoryById(id);
    return FinancesMapper.mapCategory(category);
  }

  @Get('/income/categories')
  async getIncomeCategories() {
    const categories = await this.financesService.getIncomeCategories();
    return FinancesMapper.mapCategories(categories);
  }

  @Get('/income/categories/:id')
  async getIncomeCategoryById(id: string) {
    const category = await this.financesService.getIncomeCategoryById(id);
    return FinancesMapper.mapCategory(category);
  }
}
