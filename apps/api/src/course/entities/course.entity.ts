import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../../auth/entities/user.entity';

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
  @ManyToOne(() => User, { eager: true })
  teacher: User;
}
