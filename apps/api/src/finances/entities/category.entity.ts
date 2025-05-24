import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

export type CategoryType = 'income' | 'expense';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30 })
  description: string;

  @Column({ type: 'enum', enum: ['income', 'expense'] })
  type: CategoryType;
}
