import { ICourseResponseDTO } from './student.courser.dto';

export interface IStudentResponseDTO {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
  courses?: ICourseResponseDTO[];
}
