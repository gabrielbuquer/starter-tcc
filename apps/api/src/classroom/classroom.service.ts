import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { Classroom } from './entities/classroom.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';
import { ClassroomMapper } from './classroom.mapper';

@Injectable()
export class ClassroomService {
  constructor( @InjectRepository(Classroom) private readonly repository: Repository<Classroom>){}

  create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    return this.repository.save(ClassroomMapper.toEntity(createClassroomDto));
  }

  findOne(id: string): Promise<Classroom> {
    return this.repository.findOneBy({id});
  }

}
