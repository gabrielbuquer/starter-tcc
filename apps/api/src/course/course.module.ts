import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { ClassroomModule } from '../classroom/classroom.module';
import { ClassroomCourser } from '../classroom/entities/classroom-course';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
    TypeOrmModule.forFeature([ClassroomCourser]),
    ClassroomModule,
  ],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
