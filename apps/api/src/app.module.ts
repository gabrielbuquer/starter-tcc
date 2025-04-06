import { Module } from '@nestjs/common';

import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entities/user.entity';
import { StudentModule } from './student/student.module';
import { ClassroomModule } from './classroom/classroom.module';
import { Classroom } from './classroom/entities/classroom.entity';
import { Student } from './student/entities/student.entity';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';
import { Leasson } from './course/entities/lesson.entity';
import { ClassroomCourser } from './classroom/entities/classroom-course';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [Classroom, User, Student, Course, Leasson, ClassroomCourser],
      database: 'monetix',
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    StudentModule,
    ClassroomModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
