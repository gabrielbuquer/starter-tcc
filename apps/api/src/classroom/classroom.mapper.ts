import { Classroom } from './entities/classroom.entity';
import { ICourseResponseDTO } from './dto/course-classroom.dto';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { ClassroomCourser } from './entities/classroom-course';

export class ClassroomMapper {
  static toEntity(dto: CreateClassroomDto): Classroom {
    const entitie = new Classroom();
    entitie.name = dto.name;
    return entitie;
  }

  static toResponse(e: ClassroomCourser, progress: number): ICourseResponseDTO {
    return {
      id: e.course.id,
      name: e.course.name,
      description: e.course.description,
      enabled: e.enabled,
      startDate: e.startDate,
      progress: progress,
      endDate: null,
    };
  }
}
