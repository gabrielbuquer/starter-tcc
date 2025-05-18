import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { LessonType } from '../entities/lesson.entity';

export class CreateLessonDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  @ApiProperty({ description: 'The name' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Type of lesson', enum: LessonType })
  type: LessonType;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(https?:\/\/)([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i, {
    message: 'Invalid URL format',
  })
  @ApiProperty({ description: 'Lesson URL' })
  url: string;
}
