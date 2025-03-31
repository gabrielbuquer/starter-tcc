import { ChildEntity, Entity, ManyToOne } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { Classroom } from '../../classroom/entities/classroom.entity';

@ChildEntity()
export class Student extends User {
  @ManyToOne(() => Classroom, (classroom) => classroom.students, {
    eager: true,
  })
  classroom: Classroom;
}
