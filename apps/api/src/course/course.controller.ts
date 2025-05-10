import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ICourseResponseDTO } from './dto/courser.dto';
import * as jwt from 'jsonwebtoken';
import { RequireUserType } from '../auth/decorator/require-user-type.decorator';

@Controller('/api/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    await this.courseService.create(createCourseDto);
  }

  @Get()
  async listAll(
    @RequireUserType('student') classroom: string
  ): Promise<ICourseResponseDTO[]> {
    return await this.courseService.findAll(classroom);
  }
}
