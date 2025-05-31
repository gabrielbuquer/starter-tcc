import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Registration } from './entities/registration.entity';
import { Student } from './entities/student.entity';
import { Course } from '../course/entities/course.entity';
import { Lesson } from '../course/entities/lesson.entity';
import { StudentLesson } from './entities/student-lesson';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from '../classroom/entities/classroom.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private readonly repository: Repository<Registration>
  ) {}

  async findOneByStudentAndCourse(
    student: Student,
    course: Course
  ): Promise<Registration | null> {
    return await this.repository.findOne({
      where: {
        student: student,
        course: course,
      },
      relations: ['lessons', 'lessons.lesson', 'course', 'course.lessons'],
    });
  }

  async finishLesson(student: Student, course: Course, lesson: Lesson) {
    const registration = await this.upset(student, course);
    console.log(registration);
    const lessonStudent = await registration.lessons.find(
      (l) => l.lesson.id === lesson.id
    );
    if (!lessonStudent) {
      throw new BadRequestException('Lesson not started');
    }
    lessonStudent.endDate = new Date();
    this.updateProgress(registration);
    if (registration.progress === 100) {
      registration.endDate = new Date();
    }
    await this.repository.save(registration);
  }

  async checkLesson(student: Student, course: Course, lesson: Lesson) {
    const registration = await this.upset(student, course);
    if (await registration.lessons.find((l) => l.lesson.id === lesson.id)) {
      return;
    }
    const newLesson = new StudentLesson();
    newLesson.lesson = lesson;
    newLesson.registration = registration;
    newLesson.startDate = new Date();

    registration.lessons.push(newLesson);
    await this.repository.save(registration);
  }

  async removeAllProgressFromCourse(courseId: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        progress: 0,
        startDate: () => 'CURRENT_TIMESTAMP',
        endDate: null,
      })
      .where('courseId = :courseId', { courseId })
      .execute();
  }

  async upset(student: Student, course: Course): Promise<Registration> {
    const registration: Registration | null = await this.repository.findOne({
      where: {
        student: student,
        course: course,
      },
      relations: ['lessons', 'lessons.lesson', 'course', 'course.lessons'],
    });
    console.log(registration);
    if (registration) {
      return registration;
    }

    const newLesson = new Registration();
    newLesson.course = course;
    newLesson.student = student;
    newLesson.progress = 0;
    newLesson.startDate = new Date();
    newLesson.lessons = [];
    return await this.repository.save(newLesson);
  }

  async getStudentProgressOfClass(
    classRoom: Classroom,
    course: Course
  ): Promise<number> {
    console.log(classRoom);
    console.log(course);
    const sum = await this.repository
      .createQueryBuilder('registration')
      .select('SUM(registration.progress)', 'progress')
      .leftJoin('registration.student', 'student')
      .leftJoin('registration.course', 'course')
      .leftJoin('student.classroom', 'classroom')
      .where('classroom.id = :idClassroom', { idClassroom: classRoom.id })
      .andWhere('course.id = :idCourser', { idCourser: course.id })
      .getRawOne();
    console.log(classRoom);
    console.log(classRoom.students);
    console.log(
      sum.progress / (classRoom.students ? classRoom.students.length : 1)
    );
    return sum.progress / (classRoom.students ? classRoom.students.length : 1);
  }

  updateProgress(registration: Registration) {
    const totalLessons = registration.course.lessons.length;
    console.log(totalLessons);
    const completedLessons = registration.lessons.filter(
      (l) => l.endDate !== null && l.endDate !== undefined
    ).length;
    console.log(completedLessons);
    const progress =
      totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    registration.progress = progress;

    return registration;
  }
}
