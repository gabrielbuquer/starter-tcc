import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryIncome {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @PrimaryColumn({ type: 'varchar', length: 30 })
  description: string;
}
