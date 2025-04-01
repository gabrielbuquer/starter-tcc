import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';

export enum LessonType {
  PDF = 'pdf',
  VIDEO = 'video',
  AUDIO = 'audio',
}

@Entity()
export class Leasson {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'enum', enum: LessonType })
  type: LessonType;
  @Column({ type: 'varchar', length: 255 })
  url: string;
  @ManyToOne(() => Course, (course) => course.lessons, {
    eager: true,
  })
  courser: Course;
}
