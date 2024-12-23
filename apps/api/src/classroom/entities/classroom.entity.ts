import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../../student/entities/student.entity";

export class Classroom {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Student, (student) => student.classroom)
  students: Student[];
}
