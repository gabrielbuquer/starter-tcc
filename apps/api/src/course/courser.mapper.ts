import { assign } from 'lodash';

import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

export class CourseMapper {
  static toEntity(dto: CreateCourseDto): Course {
    const course = new Course();
    assign(course, dto);
    course.lessons = course.lessons.map((lesson, index) => ({
      ...lesson,
      order: index + 1,
    }));
    return course;
  }

  static updateEntity(dto: CreateCourseDto, course: Course): Course {
    const updateCourse = new Course();
    assign(updateCourse, dto);
    return {
      ...course,
      ...updateCourse,
      lessons: updateCourse.lessons.map((lesson, index) => ({
        ...lesson,
        order: index + 1,
      })),
    };
  }
}
