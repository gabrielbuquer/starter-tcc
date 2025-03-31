import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Classroom } from '../classroom/entities/classroom.entity';
import { CreateStudentDto } from './dto/student.create';
import { IRestaurantResponseDTO } from './dto/student.response';
import { UpdateStudentDto } from './dto/student.update';
import { Student } from './entities/student.entity';
import { StudentMapper } from './student.mapper';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentyRepository: Repository<Student>
  ) {}

  async create(classromm: Classroom, createStudentDto: CreateStudentDto) {
    await this.studentyRepository.save(
      StudentMapper.toEntity(createStudentDto, classromm)
    );
  }

  async findByClassId(
    page: number,
    limit: number,
    id: string
  ): Promise<Pagination<IRestaurantResponseDTO>> {
    const queryBuilder = this.studentyRepository.createQueryBuilder('student');
    queryBuilder.where('student.classroomId = :classroomId', {
      classroomId: id,
    });
    const pagination = await paginate(queryBuilder, { page, limit });
    return new Pagination<IRestaurantResponseDTO>(
      pagination.items.map(StudentMapper.createRestaurantResponse),
      pagination.meta,
      pagination.links
    );
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
