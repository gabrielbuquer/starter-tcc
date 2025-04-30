import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Classroom } from '../classroom/entities/classroom.entity';
import { LessonService } from '../course/lesson.service';
import { CreateStudentDto } from './dto/student.create';
import { IStudentResponseDTO } from './dto/student.response';
import { UpdateStudentDto } from './dto/student.update';
import { StudentLesson } from './entities/student-lesson';
import { Student } from './entities/student.entity';
import { StudentMapper } from './student.mapper';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentyRepository: Repository<Student>,
    @InjectRepository(StudentLesson)
    private readonly studentLessonRepository: Repository<StudentLesson>,
    @Inject(forwardRef(() => LessonService))
    private readonly lessonService: LessonService
  ) {}

  async create(classromm: Classroom, createStudentDto: CreateStudentDto) {
    await this.studentyRepository.save(
      StudentMapper.toEntity(createStudentDto, classromm)
    );
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
      pagination.items.map(StudentMapper.createRestaurantResponse),
      pagination.meta,
      pagination.links
    );
  }

  async checkLesson(id: string, idLesson: string) {
    const student = await this.findOne(id);
    if (!student) throw new NotFoundException('Student not found');
    const lesson = await this.lessonService.findOne(idLesson);
    this.studentLessonRepository.save({
      lesson,
      student,
      startDate: new Date(),
    });
  }

  async finishLesson(id: string, idLesson: string) {
    await this.studentLessonRepository.update(
      {
        student: { id: id },
        lesson: { id: idLesson },
      },
      { endDate: new Date() }
    );
  }

  findAll() {
    return `This action returns all student`;
  }

  async findOne(id: string): Promise<Student | null> {
    return await this.studentyRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.classroom', 'classroom')
      .where('student.id = :id', { id })
      .andWhere('student.type = :type', { type: 'Student' })
      .getOne();
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
