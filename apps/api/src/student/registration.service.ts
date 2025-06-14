import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Course } from '../course/entities/course.entity';
import { Lesson } from '../course/entities/lesson.entity';
import { Classroom } from '../classroom/entities/classroom.entity';

import { Registration } from './entities/registration.entity';
import { Student } from './entities/student.entity';
import { StudentLesson } from './entities/student-lesson';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private readonly repository: Repository<Registration>,
  ) {}

  async findOneByStudentAndCourse(
    student: Student,
    course: Course,
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
      (l) => l.lesson.id === lesson.id,
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

  async getProgressByStudentAndCourse(
    studentId: string,
    courseId: string,
  ): Promise<number> {
    const registration = await this.repository.findOne({
      where: {
        student: { id: studentId },
        course: { id: courseId },
      },
    });
    if (!registration) {
      return 0;
    }
    return registration.progress;
  }

  async findAllByStudent(student: Student): Promise<Registration[]> {
    return await this.repository.find({
      where: {
        student: student,
      },
      relations: ['lessons', 'lessons.lesson', 'course', 'course.lessons'],
    });
  }

  async removeAllProgressFromCourse(courseId: string): Promise<void> {
    const registrations = await this.repository.find({
      where: { course: { id: courseId } },
      relations: ['lessons'],
    });

    for (const reg of registrations) {
      reg.lessons = [];
      reg.progress = 0;
      reg.startDate = new Date();
      reg.endDate = null;
    }
    await this.repository.save(registrations);
  }

  async upset(student: Student, course: Course): Promise<Registration> {
    const registration: Registration | null = await this.repository.findOne({
      where: {
        student: student,
        course: course,
      },
      relations: ['lessons', 'lessons.lesson', 'course', 'course.lessons'],
    });
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
    course: Course,
  ): Promise<number> {
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
      sum.progress / (classRoom.students ? classRoom.students.length : 1),
    );
    return sum.progress / (classRoom.students ? classRoom.students.length : 1);
  }

  updateProgress(registration: Registration) {
    const totalLessons = registration.course.lessons.length;
    console.log(totalLessons);
    const completedLessons = registration.lessons.filter(
      (l) => l.endDate !== null && l.endDate !== undefined,
    ).length;
    console.log(completedLessons);
    const progress =
      totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    registration.progress = progress;

    return registration;
  }
}
