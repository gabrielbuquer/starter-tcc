export default interface ICourseDetailsResponseDTO {
  id: string;
  name: string;
  description: string;
  lessons: {
    id: string;
    name: string;
    order: number;
    url: string;
  }[];
}
