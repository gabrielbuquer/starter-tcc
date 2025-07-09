import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { GetClassroom } from '../auth/decorator/get-classroom';
import { GetSub } from '../auth/decorator/get-sub';
import { RequireUserType } from '../auth/decorator/require-user-type.decorator';

import { CourseService } from './course.service';
import { ICourseResponseDTO } from './dto/courser.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { CourseMapper } from './courser.mapper';
import ICourseDetailsResponseDTO from './dto/couser-details.dto';

@Controller('/api/course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @RequireUserType('teacher')
  async create(
    @Body() createCourseDto: CreateCourseDto,
    @GetSub() userId: string,
  ) {
    await this.courseService.create(createCourseDto, userId);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ICourseDetailsResponseDTO> {
    return CourseMapper.toResponse(await this.courseService.findById(id));
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
    @GetSub() userId: string,
  ): Promise<ICourseResponseDTO[]> {
    return await this.courseService.findAll(classroom, userId);
  }
}
