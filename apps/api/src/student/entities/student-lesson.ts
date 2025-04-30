import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Lesson } from '../../course/entities/lesson.entity';
import { Student } from './student.entity';

@Entity()
@Unique(['lesson', 'student'])
export class StudentLesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;

  @ManyToOne(() => Student)
  student: Student;

  @Column({ type: 'date', name: 'startDate', nullable: true })
  startDate: Date;

  @Column({ type: 'date', name: 'endDate', nullable: true })
  endDate: Date;
}
