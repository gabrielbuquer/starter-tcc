import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { GetClassroom } from '../auth/decorator/get-classroom';
import { GetSub } from '../auth/decorator/get-sub';
import { RequireUserType } from '../auth/decorator/require-user-type.decorator';

import { CourseService } from './course.service';
import { ICourseResponseDTO } from './dto/courser.dto';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('/api/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @RequireUserType('teacher')
  async create(@Body() createCourseDto: CreateCourseDto) {
    await this.courseService.create(createCourseDto);
  }

  @Put(':id')
  @RequireUserType('teacher')
  async update(@Param('id') id: string, @Body() updateCourse: CreateCourseDto) {
    return await this.courseService.update(id, updateCourse);
  }

  @Get()
  @RequireUserType('student')
  async listAll(
    @GetClassroom() classroom: string,
  ): Promise<ICourseResponseDTO[]> {
    return await this.courseService.findAll(classroom);
  }
}
