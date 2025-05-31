import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClassroomModule } from '../classroom/classroom.module';
import { ClassroomCourser } from '../classroom/entities/classroom-course';
import { StudentModule } from '../student/student.module';

import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Course } from './entities/course.entity';
import { LessonService } from './lesson.service';
import { Lesson } from './entities/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
    TypeOrmModule.forFeature([ClassroomCourser]),
    TypeOrmModule.forFeature([Lesson]),
    forwardRef(() => ClassroomModule),
    forwardRef(() => StudentModule),
  ],
  controllers: [CourseController],
  providers: [CourseService, LessonService],
  exports: [CourseService, LessonService],
})
export class CourseModule {}
