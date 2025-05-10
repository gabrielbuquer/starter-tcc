import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { StudentLesson } from './entities/student-lesson';
import { LessonService } from '../course/lesson.service';
import { CourseModule } from '../course/course.module';
import { Lesson } from '../course/entities/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forFeature([StudentLesson]),
    TypeOrmModule.forFeature([Lesson]),
    CourseModule,
  ],
  controllers: [StudentController],
  providers: [StudentService, LessonService],
  exports: [StudentService, LessonService],
})
export class StudentModule {}
