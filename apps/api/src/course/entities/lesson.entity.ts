import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';

export enum LessonType {
  PDF = 'pdf',
  VIDEO = 'video',
  AUDIO = 'audio',
}

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'enum', enum: LessonType })
  type: LessonType;
  @Column({ type: 'varchar', length: 255 })
  url: string;
  @Column({ type: 'int', default: 0 })
  order: number;
  @ManyToOne(() => Course, (course) => course.lessons, {
    eager: true,
  })
  course: Course;
}
