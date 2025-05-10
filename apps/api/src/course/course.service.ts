import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { CourseMapper } from './courser.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { ClassroomService } from '../classroom/classroom.service';
import { ICourseResponseDTO } from './dto/courser.dto';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { ClassroomCourser } from '../classroom/entities/classroom-course';
import { ClassroomMapper } from '../classroom/classroom.mapper';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly repository: Repository<Course>,
    @Inject(forwardRef(() => ClassroomService))
    private readonly classroomService: ClassroomService,
    @InjectRepository(ClassroomCourser)
    private readonly classroomCourseRepository: Repository<ClassroomCourser>
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = CourseMapper.toEntity(createCourseDto);
    await this.repository.save(course);
    await this.classroomService.includeCourserInAllClassroom(course);
  }

  async findAll(classroom: string): Promise<ICourseResponseDTO[]> {
    const queryBuilder = this.classroomCourseRepository
      .createQueryBuilder('classroom_course')
      .leftJoinAndSelect('classroom_course.course', 'course')
      .where('classroom_course.classroom = :classroomId', {
        classroomId: classroom,
      })
      .andWhere('classroom_course.enabled = :enabled', { enabled: true });

    return queryBuilder.getMany().then((classroomCourses) => {
      return classroomCourses.map((classroomCourse) => {
        return ClassroomMapper.toResponse(classroomCourse);
      });
    });
  }
}
