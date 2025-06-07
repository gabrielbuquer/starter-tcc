import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Student } from '../../student/entities/student.entity';

import { Category } from './category.entity';

@Entity()
export default class Goal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => Category)
  category: Category;

  @ManyToOne(() => Student)
  student: Student;
}
