import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('/api/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Patch('/:id/lesson/:idLesson/check')
  checkLesson(@Param('id') id: string, @Param('idLesson') idLesson: string) {
    this.studentService.checkLesson(id, idLesson);
  }
}
