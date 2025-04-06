import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Course } from '../../course/entities/course.entity';
import { Classroom } from './classroom.entity';

@Entity()
@Unique(['classroom', 'course'])
export class ClassroomCourser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Classroom)
  classroom: Classroom;

  @ManyToOne(() => Course)
  course: Course;

  @Column({ default: false })
  enabled: boolean;

  @Column({ type: 'date', name: 'startDate', nullable: true })
  startDate: Date;

  @Column({ type: 'date', name: 'endDate', nullable: true })
  endDate: Date;
}
