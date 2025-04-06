import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateStudentDto } from '../student/dto/student.create';
import { StudentService } from '../student/student.service';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';

@Controller('/api/class-room')
export class ClassroomController {
  constructor(
    private readonly classroomService: ClassroomService,
    private readonly studentService: StudentService
  ) {}

  @Post()
  @ApiBody({ type: CreateClassroomDto })
  async create(@Body() createClassroomDto: CreateClassroomDto) {
    return await this.classroomService.create(createClassroomDto);
  }

  @Post('/:id/students')
  @ApiBody({ type: CreateStudentDto })
  async createAStudenty(
    @Param('id') id: string,
    @Body() createStudentDto: CreateStudentDto
  ) {
    await this.classroomService.createStudenty(id, createStudentDto);
    return new Response('Ok');
  }

  @Get('/:id/students')
  async listAllStudents(
    @Param('id') id: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10
  ) {
    limit = limit > 100 ? 100 : limit;
    return await this.classroomService.listAllStudent(page, limit, id);
  }
}
