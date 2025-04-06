import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { DataSource, Repository } from 'typeorm';
import { Course } from '../course/entities/course.entity';
import { CreateStudentDto } from '../student/dto/student.create';
import { IStudentResponseDTO } from '../student/dto/student.response';
import { StudentService } from '../student/student.service';
import { ClassroomMapper } from './classroom.mapper';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { Classroom } from './entities/classroom.entity';
import { ClassroomCourser } from './entities/classroom-course';
import { ICourseResponseDTO } from './dto/course-classroom.dto';

const DEFAULT_ENABLED_COURSER = false;

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private readonly repository: Repository<Classroom>,
    @InjectRepository(ClassroomCourser)
    private readonly classroomCourseRepository: Repository<ClassroomCourser>,
    private readonly dataSource: DataSource,
    private readonly studentService: StudentService
  ) {}

  async create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    const classroom = await this.repository.save(
      ClassroomMapper.toEntity(createClassroomDto)
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
    id: string
  ): Promise<Pagination<IStudentResponseDTO>> {
    return await this.studentService.findByClassId(page, limit, id);
  }

  async listAllCourses(
    page: number,
    limit: number,
    id: string
  ): Promise<Pagination<ICourseResponseDTO>> {
    const queryBuilder = this.classroomCourseRepository
      .createQueryBuilder('classroom_course')
      .leftJoinAndSelect('classroom_course.course', 'course')
      .where('classroom_course.classroom = :classroomId', { classroomId: id });

    const pagination = await paginate<ClassroomCourser>(queryBuilder, {
      page,
      limit,
    });

    return new Pagination<ICourseResponseDTO>(
      pagination.items.map(ClassroomMapper.toResponse),
      pagination.meta,
      pagination.links
    );
  }

  async includeAllCurserInAllClassroom(classroom: Classroom) {
    const entityManager = this.dataSource.manager;

    const [selectQuery, params] = entityManager
      .createQueryBuilder()
      .select([
        'course.id AS "courseId"',
        `'${classroom.id}' AS "classRoomId"`,
        `${DEFAULT_ENABLED_COURSER} AS "enabled"`,
      ])
      .from(Course, 'course')
      .getQueryAndParameters();

    await entityManager.query(
      `
      INSERT INTO classroom_courser("courseId", "classroomId", "enabled")
      ${selectQuery}
      `,
      params
    );
  }

  async includeCourserInAllClassroom(course: Course) {
    const entityManager = this.dataSource.manager;

    const [selectQuery, params] = entityManager
      .createQueryBuilder()
      .select([
        `'${course.id}' AS "courseId"`,
        'classroom.id AS "classRoomId"',
        `${DEFAULT_ENABLED_COURSER} AS "enabled"`,
      ])
      .from(Classroom, 'classroom')
      .getQueryAndParameters();

    await entityManager.query(
      `
      INSERT INTO classroom_courser("courseId", "classroomId", "enabled")
      ${selectQuery}
      `,
      params
    );
  }
}
