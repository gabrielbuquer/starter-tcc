import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { CourseMapper } from './courser.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { ClassroomService } from '../classroom/classroom.service';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly repository: Repository<Course>,
    @Inject(forwardRef(() => ClassroomService))
    private readonly classroomService: ClassroomService
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = CourseMapper.toEntity(createCourseDto);
    await this.repository.save(course);
    await this.classroomService.includeCourserInAllClassroom(course);
  }
}
