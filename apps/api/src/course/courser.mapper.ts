import { assign } from 'lodash';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import ICourseDetailsResponseDTO from './dto/couser-details.dto';

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

  static toResponse(entity: Course): ICourseDetailsResponseDTO {
    const response = {} as ICourseDetailsResponseDTO;
    response.id = entity.id;
    response.name = entity.name;
    response.description = entity.description;
    response.lessons = entity.lessons.map((lesson) => ({
      id: lesson.id,
      name: lesson.name,
      order: lesson.order,
      url: lesson.url,
    }));
    return response;
  }
}
