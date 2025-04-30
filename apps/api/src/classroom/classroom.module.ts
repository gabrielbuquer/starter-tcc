import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from '../student/student.module';
import { ClassroomController } from './classroom.controller';
import { ClassroomService } from './classroom.service';
import { Classroom } from './entities/classroom.entity';
import { ClassroomCourser } from './entities/classroom-course';

@Module({
  imports: [
    TypeOrmModule.forFeature([Classroom, ClassroomCourser]),
    forwardRef(() => StudentModule),
  ],
  controllers: [ClassroomController],
  providers: [ClassroomService],
  exports: [ClassroomService],
})
export class ClassroomModule {}
