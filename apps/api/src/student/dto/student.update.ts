import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './student.create';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
