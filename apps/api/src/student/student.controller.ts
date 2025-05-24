import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Patch,
} from '@nestjs/common';

import { GetClassroom } from '../auth/decorator/get-classroom';
import { RequireUserType } from '../auth/decorator/require-user-type.decorator';

import { StudentMapper } from './student.mapper';
import { StudentService } from './student.service';

@Controller('/api/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @RequireUserType('student')
  @Patch('/:id/course/:idCourse/check')
  async checkCourser(
    @Param('id') id: string,
    @Param('idCourse') idCouser: string,
    @GetClassroom() idClassRoom,
  ) {
    await this.studentService.checkCourse(id, idCouser, idClassRoom);
  }

  @RequireUserType('student')
  @Patch('/:id/lesson/:idLesson/check')
  async checkLesson(
    @Param('id') id: string,
    @Param('idLesson') idLesson: string,
  ) {
    await this.studentService.checkLesson(id, idLesson);
  }

  @RequireUserType('student')
  @Patch('/:id/lesson/:idLesson/finish')
  async finishLesson(
    @Param('id') id: string,
    @Param('idLesson') idLesson: string,
  ) {
    await this.studentService.finishLesson(id, idLesson);
  }

  @RequireUserType('student')
  @Get('/:id/courser/:idCourser')
  async getCourser(
    @Param('id') id: string,
    @Param('idCourser') idCourser: string,
    @GetClassroom() idClassRoom,
  ) {
    const registration = await this.studentService.getCourser(
      id,
      idCourser,
      idClassRoom,
    );
    if (!registration) {
      throw new BadRequestException('Registration not found');
    }
    return StudentMapper.createRegistrationResponse(registration);
  }
}
