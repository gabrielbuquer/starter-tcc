import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly repository: Repository<Lesson>
  ) {}

  async findOne(id: string): Promise<Lesson | null> {
    const lesson = await this.repository.findOne({
      where: { id },
      relations: ['course'],
    });
    if (!lesson) throw new NotFoundException('Lesson not found');
    return lesson;
  }
}
