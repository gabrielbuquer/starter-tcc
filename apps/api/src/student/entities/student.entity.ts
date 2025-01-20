import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Classroom } from "../../classroom/entities/classroom.entity";
import { User } from "../../auth/entities/user.entity";

@Entity()
export class Student extends User {
  @ManyToOne(()=>Classroom, (classroom)=>classroom.students,{eager: true})
  classroom: Classroom;
}
