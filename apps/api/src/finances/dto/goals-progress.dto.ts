export default interface GoalsProgressDto {
  id: string;
  category: {
    id: string;
    description: string;
  };
  realized: number;
  planed: number;
  progress: number;
  diff: number;
}
