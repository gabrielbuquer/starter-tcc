import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class FilterTransactionDto {
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  'start-date'?: Date;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  'end-date'?: Date;

  @IsOptional()
  @IsString()
  type?: 'income' | 'expense';
}
