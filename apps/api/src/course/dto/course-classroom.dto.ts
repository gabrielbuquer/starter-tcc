import { Double } from 'typeorm';

export interface ICourseResponseDTO {
  id: string;
  name: string;
  description: string;
  enabled: true;
  start_date: Date;
  end_date: Date;
  progress: Double;
}
