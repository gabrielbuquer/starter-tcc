import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateLessonDto } from './create-lesson.dto';

export class CreateCourseDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  @ApiProperty({ description: 'The name' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Descrição' })
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLessonDto)
  @ApiProperty({
    description: 'List of lessons in the course',
    type: [CreateLessonDto],
  })
  lessons: CreateLessonDto[];
}
