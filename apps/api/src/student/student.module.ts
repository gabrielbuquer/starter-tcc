import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseModule } from '../course/course.module';
import { Lesson } from '../course/entities/lesson.entity';
import { LessonService } from '../course/lesson.service';

import { Registration } from './entities/registration.entity';
import { StudentLesson } from './entities/student-lesson';
import { Student } from './entities/student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { RegistrationService } from './registration.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forFeature([StudentLesson]),
    TypeOrmModule.forFeature([Lesson]),
    TypeOrmModule.forFeature([Registration]),
    CourseModule,
  ],
  controllers: [StudentController],
  providers: [StudentService, LessonService, RegistrationService],
  exports: [StudentService, LessonService, RegistrationService],
})
export class StudentModule {}
