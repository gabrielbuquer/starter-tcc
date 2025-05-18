export interface IAuthResponseDTO {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
  classroom: string | null;
  type: string;
  accessToken: string;
  refreshToken: string;
}
