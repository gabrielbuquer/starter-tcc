import { Pagination } from 'nestjs-typeorm-paginate';

export interface PaginatedWithResumeGoalsDTO<T> extends Pagination<T> {
  resume: {
    goals: number;
    actual: number;
    diff: number;
  };
}
