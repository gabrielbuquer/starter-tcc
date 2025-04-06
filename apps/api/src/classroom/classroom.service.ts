import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { DataSource, Repository } from 'typeorm';
import { Course } from '../course/entities/course.entity';
import { CreateStudentDto } from '../student/dto/student.create';
import { IStudentResponseDTO } from '../student/dto/student.response';
import { StudentService } from '../student/student.service';
import { ClassroomMapper } from './classroom.mapper';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private readonly repository: Repository<Classroom>,
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

  async includeAllCurserInAllClassroom(classroom: Classroom) {
    const entityManager = this.dataSource.manager;

    const [selectQuery, params] = entityManager
      .createQueryBuilder()
      .select([
        'course.id AS "courseId"',
        `'${classroom.id}' AS "classRoomId"`,
        'true AS "enabled"',
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
        'true AS "enabled"',
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
