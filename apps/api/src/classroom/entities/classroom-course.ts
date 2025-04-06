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
@Unique(['classroom', 'course']) // <- Aqui está a restrição de unicidade
export class ClassroomCourser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Classroom)
  classroom: Classroom;

  @ManyToOne(() => Course)
  course: Course;

  @Column({ default: true })
  enabled: boolean;
}
