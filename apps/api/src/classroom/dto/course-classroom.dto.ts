import { Double } from 'typeorm';

export interface ICourseResponseDTO {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  startDate: Date;
  endDate: Date | null;
  progress: number | null;
  teacher: {
    id: string;
    name: string;
  };
}
