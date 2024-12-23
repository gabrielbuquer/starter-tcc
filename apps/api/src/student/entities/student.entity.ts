import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Classroom } from "../../classroom/entities/classroom.entity";
import { User } from "../../auth/entities/user.entity";

export class Student extends User {
  @ManyToOne(()=>Classroom, (classroom)=>classroom.students,{eager: true})
  classroom: Classroom;
}
