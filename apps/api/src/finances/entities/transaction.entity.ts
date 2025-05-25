import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Category } from './category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @ManyToOne(() => Student)
  student: Student;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'varchar', length: 30 })
  type: string;

  @ManyToOne(() => Category)
  category: Category;
}
