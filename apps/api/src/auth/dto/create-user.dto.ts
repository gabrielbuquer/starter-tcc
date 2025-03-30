import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinDate,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  @ApiProperty({ description: 'The name' })
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide valid Email.' })
  @ApiProperty({ description: 'Email' })
  email: string;

  @Type(() => Date)
  @ApiProperty({
    description: 'BirthDate',
    example: '1995-08-15T00:00:00.000Z',
  })
  @ApiProperty({ description: 'BirthDate' })
  birthDate: Date;

  @IsNotEmpty()
  @ApiProperty({ description: 'Password' })
  password: string;
}
