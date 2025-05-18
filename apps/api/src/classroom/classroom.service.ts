import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';
import { DataSource, Repository } from 'typeorm';

import { Course } from '../course/entities/course.entity';
import { CreateStudentDto } from '../student/dto/student.create';
import { IStudentResponseDTO } from '../student/dto/student.response';
import { StudentService } from '../student/student.service';
import { StudentLesson } from '../student/entities/student-lesson';

import { ClassroomMapper } from './classroom.mapper';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { Classroom } from './entities/classroom.entity';
import { ClassroomCourser } from './entities/classroom-course';
import { ICourseResponseDTO } from './dto/course-classroom.dto';

const IS_DEFAULT_ENABLED_COURSER = false;

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private readonly repository: Repository<Classroom>,
    @InjectRepository(ClassroomCourser)
    private readonly classroomCourseRepository: Repository<ClassroomCourser>,
    private readonly dataSource: DataSource,
    private readonly studentService: StudentService,
  ) {}

  async create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    const classroom = await this.repository.save(
      ClassroomMapper.toEntity(createClassroomDto),
    );
    await this.includeAllCurserInAllClassroom(classroom);
    return classroom;
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
    id: string,
  ): Promise<Pagination<IStudentResponseDTO>> {
    return await this.studentService.findByClassId(page, limit, id);
  }

  async enabledCourser(classroomId: string, courseId: string) {
    const record = await this.classroomCourseRepository.findOne({
      where: {
        classroom: { id: classroomId },
        course: { id: courseId },
      },
      relations: ['classroom', 'course'],
    });

    if (!record) {
      throw new NotFoundException(
        `ClassroomCourser not found for classroom ${classroomId} and course ${courseId}`,
      );
    }

    record.enabled = true;
    record.startDate = new Date();

    return this.classroomCourseRepository.save(record);
  }

  async listAllCourses(
    page: number,
    limit: number,
    id: string,
  ): Promise<Pagination<ICourseResponseDTO>> {
    const queryBuilder = this.classroomCourseRepository
      .createQueryBuilder('classroom_course')
      .leftJoinAndSelect('classroom_course.course', 'course')
      .leftJoinAndSelect('classroom_course.classroom', 'classroom')
      .leftJoinAndSelect('course.lessons', 'lessons')
      .where('classroom_course.classroom = :classroomId', { classroomId: id });

    const pagination = await paginate<ClassroomCourser>(queryBuilder, {
      page,
      limit,
    });

    const dtos: ICourseResponseDTO[] = await Promise.all(
      pagination.items.map(async (c) => {
        const progress = await this.calculateProgress(c.classroom, c.course);
        return ClassroomMapper.toResponse(c, progress);
      }),
    );
    return new Pagination<ICourseResponseDTO>(
      dtos,
      pagination.meta,
      pagination.links,
    );
  }

  async calculateProgress(
    classroom: Classroom,
    course: Course,
  ): Promise<number> {
    console.log('classromm', classroom);
    console.log('course', course);

    const calculateProgress = await this.dataSource
      .getRepository(StudentLesson)
      .createQueryBuilder('student_lesson')
      .leftJoinAndSelect('student_lesson.student', 'student')
      .leftJoinAndSelect('student_lesson.lesson', 'lesson')
      .where('student.classroom = :classroomId', {
        classroomId: classroom.id,
      })
      .andWhere('lesson.course = :courseId', { courseId: course.id })
      .andWhere(
        'student_lesson.startDate IS NOT NULL AND student_lesson.endDate IS NOT NULL',
      )
      .getCount();
    const totalLessons = course.lessons.length;

    if (totalLessons === 0) {
      return 0;
    }
    return (calculateProgress / totalLessons) * 100;
  }

  async includeAllCurserInAllClassroom(classroom: Classroom) {
    const entityManager = this.dataSource.manager;

    const [selectQuery, params] = entityManager
      .createQueryBuilder()
      .select([
        'course.id AS "courseId"',
        `'${classroom.id}' AS "classRoomId"`,
        `${IS_DEFAULT_ENABLED_COURSER} AS "enabled"`,
      ])
      .from(Course, 'course')
      .getQueryAndParameters();

    await entityManager.query(
      `
      INSERT INTO classroom_courser("courseId", "classroomId", "enabled")
      ${selectQuery}
      `,
      params,
    );
  }

  async includeCourserInAllClassroom(course: Course) {
    const entityManager = this.dataSource.manager;

    const [selectQuery, params] = entityManager
      .createQueryBuilder()
      .select([
        `'${course.id}' AS "courseId"`,
        'classroom.id AS "classRoomId"',
        `${IS_DEFAULT_ENABLED_COURSER} AS "enabled"`,
      ])
      .from(Classroom, 'classroom')
      .getQueryAndParameters();

    await entityManager.query(
      `
      INSERT INTO classroom_courser("courseId", "classroomId", "enabled")
      ${selectQuery}
      `,
      params,
    );
  }
}
