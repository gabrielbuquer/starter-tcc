import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('/api/classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  @ApiBody({ type: CreateClassroomDto })
  async create(@Body() createClassroomDto: CreateClassroomDto) {
    return await this.classroomService.create(createClassroomDto);
  }

}
