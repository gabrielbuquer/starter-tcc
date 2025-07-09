import { Pagination } from 'nestjs-typeorm-paginate';

export interface PaginatedWithResumeDto<T> extends Pagination<T> {
  resume: {
    amount: number;
    totalIncome: number;
    totalExpense: number;
  };
}
