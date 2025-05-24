import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { ClassroomCourser } from '../classroom/entities/classroom-course';
import { Classroom } from '../classroom/entities/classroom.entity';
import { CourseService } from '../course/course.service';
import { LessonService } from '../course/lesson.service';
import { CreateStudentDto } from './dto/student.create';
import { IStudentResponseDTO } from './dto/student.response';
import { UpdateStudentDto } from './dto/student.update';
import { Student } from './entities/student.entity';
import { RegistrationService } from './registration.service';
import { StudentMapper } from './student.mapper';
import { Registration } from './entities/registration.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentyRepository: Repository<Student>,
    private readonly registrationService: RegistrationService,
    @Inject(forwardRef(() => LessonService))
    private readonly lessonService: LessonService,
    private readonly couserService: CourseService
  ) {}

  async create(classromm: Classroom, createStudentDto: CreateStudentDto) {
    await this.studentyRepository.save(
      StudentMapper.toEntity(createStudentDto, classromm)
    );
  }

  async findById(id: string): Promise<Student> {
    const student = await this.studentyRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.classroom', 'classroom')
      .where('student.id = :id', { id })
      .andWhere('student.type = :type', { type: 'Student' })
      .getOne();
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  async findByClassId(
    page: number,
    limit: number,
    id: string
  ): Promise<Pagination<IStudentResponseDTO>> {
    const queryBuilder = this.studentyRepository.createQueryBuilder('student');
    queryBuilder.where('student.classroomId = :classroomId', {
      classroomId: id,
    });
    const pagination = await paginate(queryBuilder, { page, limit });
    return new Pagination<IStudentResponseDTO>(
      pagination.items.map(StudentMapper.createStudentResponse),
      pagination.meta,
      pagination.links
    );
  }

  async getCourser(
    id: string,
    idCourser: string,
    idClassRoom: string
  ): Promise<Registration | null> {
    const student = await this.findOne(id);
    const { course } = await this.couserService.findOne(idCourser, idClassRoom);
    return await this.registrationService.findOneByStudentAndCourse(
      student,
      course
    );
  }

  async checkCourse(id: string, idCourser: string, idClassRoom: string) {
    const { course } = await this.couserService.findOne(idCourser, idClassRoom);
    const student = await this.findOne(id);

    await this.registrationService.upset(student, course);
  }

  async checkLesson(id: string, idLesson: string) {
    const lesson = await this.lessonService.findOne(idLesson);
    const student = await this.findOne(id);

    await this.registrationService.checkLesson(student, lesson.course, lesson);
  }

  async finishLesson(id: string, idLesson: string) {
    const lesson = await this.lessonService.findOne(idLesson);
    const student = await this.findOne(id);

    await this.registrationService.finishLesson(student, lesson.course, lesson);
  }

  findAll() {
    return `This action returns all student`;
  }

  async findOne(id: string): Promise<Student> {
    const student = await this.studentyRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.classroom', 'classroom')
      .where('student.id = :id', { id })
      .andWhere('student.type = :type', { type: 'Student' })
      .getOne();
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
