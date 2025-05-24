import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { Lesson } from '../../course/entities/lesson.entity';

import { Registration } from './registration.entity';

@Entity()
@Unique(['lesson', 'registration'])
export class StudentLesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Lesson)
  lesson: Lesson;

  @ManyToOne(() => Registration)
  registration: Registration;

  @Column({ type: 'date', name: 'startDate', nullable: true })
  startDate: Date;

  @Column({ type: 'date', name: 'endDate', nullable: true })
  endDate: Date;
}
