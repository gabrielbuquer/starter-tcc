import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { assign } from 'lodash';

export class CourseMapper {
  static toEntity(dto: CreateCourseDto): Course {
    const course = new Course();
    assign(course, dto);
    return course;
  }
}
