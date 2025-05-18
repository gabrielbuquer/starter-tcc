import { CreateUserDto } from '../auth/dto/create-user.dto';
import { Classroom } from '../classroom/entities/classroom.entity';
import { CreateStudentDto } from './dto/student.create';
import { Student } from './entities/student.entity';
import { IStudentResponseDTO } from './dto/student.response';

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

  static createRestaurantResponse(student: Student): IStudentResponseDTO {
    return {
      id: student.id,
      name: student.name,
      email: student.email,
      birthDate: student.birthDate,
    };
  }
}
