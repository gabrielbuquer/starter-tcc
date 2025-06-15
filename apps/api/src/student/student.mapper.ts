import { Classroom } from '../classroom/entities/classroom.entity';
import { ICourseResponseDTO } from './dto/student.courser.dto';
import { CreateStudentDto } from './dto/student.create';
import { IStudentResponseDTO } from './dto/student.response';
import { Registration } from './entities/registration.entity';
import { Student } from './entities/student.entity';
import * as bcrypt from 'bcrypt';

export class StudentMapper {
  static async toEntity(
    dto: CreateStudentDto,
    classRoom: Classroom
  ): Promise<Student> {
    const student = new Student();
    student.name = dto.name;
    student.email = dto.email;
    student.password = await bcrypt.hash(dto.password, 10);
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
    registration: Registration
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
