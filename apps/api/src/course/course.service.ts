import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClassroomService } from '../classroom/classroom.service';
import { ClassroomCourser } from '../classroom/entities/classroom-course';
import { ClassroomMapper } from '../classroom/classroom.mapper';

import { ICourseResponseDTO } from './dto/courser.dto';
import { Course } from './entities/course.entity';
import { CourseMapper } from './courser.mapper';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly repository: Repository<Course>,
    @Inject(forwardRef(() => ClassroomService))
    private readonly classroomService: ClassroomService,
    @InjectRepository(ClassroomCourser)
    private readonly classroomCourseRepository: Repository<ClassroomCourser>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = CourseMapper.toEntity(createCourseDto);
    await this.repository.save(course);
    await this.classroomService.includeCourserInAllClassroom(course);
  }

  async findOne(id: string, classroom: string): Promise<ClassroomCourser> {
    console.log('findOne', id, classroom);
    const classroomCourse = await this.classroomCourseRepository.findOne({
      where: {
        course: { id },
        classroom: { id: classroom },
        enabled: true,
      },
      relations: ['course'],
    });
    console.log('classroomCourse', classroomCourse);
    if (!classroomCourse) {
      throw new NotFoundException(`Course not found for this classroom`);
    }

    return classroomCourse;
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
        return ClassroomMapper.toResponse(classroomCourse, 0); //TODO:
      });
    });
  }
}
