import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CreateStudentDto } from '../student/dto/student.create';
import { IRestaurantResponseDTO } from '../student/dto/student.response';
import { StudentService } from '../student/student.service';
import { ClassroomMapper } from './classroom.mapper';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private readonly repository: Repository<Classroom>,
    private readonly studentService: StudentService
  ) {}

  create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    return this.repository.save(ClassroomMapper.toEntity(createClassroomDto));
  }

  async createStudenty(id: string, createStudent: CreateStudentDto) {
    const classRoom: Classroom = await this.findOne(id);
    if (!classRoom) {
      throw new BadRequestException('Classroom not found');
    }
    this.studentService.create(classRoom, createStudent);
  }

  findOne(id: string): Promise<Classroom> {
    return this.repository.findOneBy({ id });
  }

  async listAllStudent(
    page: number,
    limit: number,
    id: string
  ): Promise<Pagination<IRestaurantResponseDTO>> {
    return await this.studentService.findByClassId(page, limit, id);
  }
}
