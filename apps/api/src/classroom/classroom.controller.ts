import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateStudentDto } from '../student/dto/student.create';
import { StudentService } from '../student/student.service';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { RequireUserType } from '../auth/decorator/require-user-type.decorator';

@Controller('/api/class-room')
export class ClassroomController {
  constructor(
    private readonly classroomService: ClassroomService,
    private readonly studentService: StudentService
  ) {}

  @Post()
  @RequireUserType('teacher')
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
  @RequireUserType('teacher')
  async listAllStudents(
    @Param('id') id: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10
  ) {
    limit = limit > 100 ? 100 : limit;
    return await this.classroomService.listAllStudent(page, limit, id);
  }

  @Get('/:id/courses')
  @RequireUserType('teacher')
  async listAllCourses(
    @Param('id') id: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10
  ) {
    limit = limit > 100 ? 100 : limit;
    return await this.classroomService.listAllCourses(page, limit, id);
  }

  @RequireUserType('teacher')
  @Patch('/:id/courses/:idCourse/enable')
  async enabledCourse(
    @Param('id') id: string,
    @Param('idCourse') idCourse: string
  ) {
    await this.classroomService.enabledCourser(id, idCourse);
  }
}
