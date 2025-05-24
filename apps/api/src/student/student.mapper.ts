import { describe } from 'node:test';

import { CreateUserDto } from '../auth/dto/create-user.dto';
import { Classroom } from '../classroom/entities/classroom.entity';
import { Course } from '../course/entities/course.entity';

import { CreateStudentDto } from './dto/student.create';
import { Student } from './entities/student.entity';
import { IStudentResponseDTO } from './dto/student.response';
import { StudentLesson } from './entities/student-lesson';
import { Registration } from './entities/registration.entity';
import { ICourseResponseDTO } from './dto/student.courser.dto';

export class StudentMapper {
  static toEntity(dto: CreateStudentDto, classRoom: Classroom): Student {
    const student = new Student();
    student.name = dto.name;
    student.email = dto.email;
    student.password = dto.password; //TODO: encrypt the password
    student.classroom = classRoom;
    student.birthDate = dto.birthDate;
    return student;
  }

  static createStudentResponse(student: Student): IStudentResponseDTO {
    return {
      id: student.id,
      name: student.name,
      email: student.email,
      birthDate: student.birthDate,
    };
  }

  static createRegistrationResponse(
    registration: Registration,
  ): ICourseResponseDTO {
    console.log('registration', registration);
    return {
      id: registration.course.id,
      name: registration.course.name,
      description: registration.course.description,
      startDate: registration.startDate,
      endDate: registration.endDate,
      progress: registration.progress,
      lessons: registration.course.lessons.map((lesson) => ({
        id: lesson.id,
        name: lesson.name,
        startDate: registration.lessons.find((l) => l.lesson.id === lesson.id)
          ?.startDate,
        endDate: registration.lessons.find((l) => l.lesson.id === lesson.id)
          ?.endDate,
        url: lesson.url,
        type: lesson.type.toString(),
      })),
    };
  }
}
