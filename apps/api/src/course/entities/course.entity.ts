import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lesson } from './lesson.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 30 })
  name: string;
  @Column({ type: 'varchar', length: 255 })
  description: string;
  @OneToMany(() => Lesson, (l) => l.course, { cascade: true })
  lessons: Lesson[];
}
