import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { CourseMapper } from './courser.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { ClassroomService } from '../classroom/classroom.service';
import { ICourseResponseDTO } from './dto/courser.dto';
import { ClassroomCourser } from '../classroom/entities/classroom-course';
import { ClassroomMapper } from '../classroom/classroom.mapper';
import { RegistrationService } from '../student/registration.service';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly repository: Repository<Course>,
    @Inject(forwardRef(() => ClassroomService))
    private readonly classroomService: ClassroomService,
    @InjectRepository(ClassroomCourser)
    private readonly classroomCourseRepository: Repository<ClassroomCourser>,
    @Inject(forwardRef(() => RegistrationService))
    private readonly registrationService: RegistrationService
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = CourseMapper.toEntity(createCourseDto);
    await this.repository.save(course);
    await this.classroomService.includeCourserInAllClassroom(course);
  }

  async update(id: string, updateCourse: CreateCourseDto): Promise<Course> {
    const course = await this.findById(id);
    this.registrationService.removeAllProgressFromCourse(id);
    const updatedCourse = CourseMapper.updateEntity(updateCourse, course);
    return this.repository.save(updatedCourse);
  }

  async findById(id: string): Promise<Course> {
    const course = await this.repository.findOne({
      where: { id },
      relations: ['lessons'],
    });
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
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
