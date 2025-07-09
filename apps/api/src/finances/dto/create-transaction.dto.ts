import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({ example: 'Almoço no restaurante' })
  @IsString()
  description: string;

  @ApiProperty({ example: 52.5 })
  @IsNumber()
  value: number;

  @ApiProperty({ example: '2025-05-24' })
  @IsDateString()
  date: string;

  @ApiProperty({ enum: ['expense', 'income'], example: 'expense' })
  @IsEnum(['expense', 'income'])
  type: 'expense' | 'income';

  @IsString()
  @ApiProperty({ example: 'dsf8a9b0-4c3e-4b2d-8f5e-1a2b3c4d5e6f' })
  categoryId: string;
}
