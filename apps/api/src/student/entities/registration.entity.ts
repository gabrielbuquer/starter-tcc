import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { Course } from '../../course/entities/course.entity';

import { StudentLesson } from './student-lesson';
import { Student } from './student.entity';

@Entity()
@Unique(['course', 'student'])
export class Registration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Course)
  course: Course;

  @ManyToOne(() => Student)
  student: Student;

  @OneToMany(() => StudentLesson, (l) => l.registration, {
    cascade: true,
    lazy: false,
  })
  lessons: StudentLesson[];

  @Column({ type: 'float', name: 'progress', nullable: true })
  progress: number;

  @Column({ type: 'date', name: 'startDate', nullable: true })
  startDate: Date;

  @Column({ type: 'date', name: 'endDate', nullable: true })
  endDate: Date;
}
