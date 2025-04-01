import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { CourseMapper } from './courser.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly repository: Repository<Course>
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = CourseMapper.toEntity(createCourseDto);
    await this.repository.save(course);
  }

  findAll() {
    return `This action returns all course`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
