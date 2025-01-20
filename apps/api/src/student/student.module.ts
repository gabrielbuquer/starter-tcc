import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { ClassroomService } from '../classroom/classroom.service';
import { ClassroomModule } from '../classroom/classroom.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    ClassroomModule,
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
