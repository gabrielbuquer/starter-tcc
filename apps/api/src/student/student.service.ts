import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ClassroomService } from '../classroom/classroom.service';
import { Classroom } from '../classroom/entities/classroom.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { StudentMapper } from './student.mapper';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private readonly studentyRepository: Repository<Student>,
  private classroomService: ClassroomService) { }

  async create(createStudentDto: CreateStudentDto) {
    const classRoom : Classroom = await this.classroomService.findOne(createStudentDto.classId);
    if(!classRoom){
      throw new BadRequestException("Classroom not found");
    }
    await this.studentyRepository.save(StudentMapper.toEntity(createStudentDto,classRoom));
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
