export interface ICourseResponseDTO {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  progress: number;
  lessons: {
    id: string;
    name: string;
    startDate: Date | null;
    endDate: Date | null;
    url: string;
    type: string;
  }[];
}
