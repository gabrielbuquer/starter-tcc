import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { Classroom } from './entities/classroom.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class ClassroomService {
  constructor( @InjectRepository(Classroom) private readonly classRoomRepository: Repository<Classroom>){}

  create(createClassroomDto: CreateClassroomDto) {
    return 'This action adds a new classroom';
  }

  findAll() {
    return `This action returns all classroom`;
  }

  findOne(id: string): Promise<Classroom> {
    return this.classRoomRepository.findOneBy({id});
  }

  remove(id: number) {
    return `This action removes a #${id} classroom`;
  }
}
