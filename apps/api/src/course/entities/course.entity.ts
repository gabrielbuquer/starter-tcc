import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Leasson } from './lesson.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 30 })
  name: string;
  @Column({ type: 'varchar', length: 255 })
  description: string;
  @OneToMany(() => Leasson, (l) => l.courser, { cascade: true })
  lessons: Leasson[];
}
