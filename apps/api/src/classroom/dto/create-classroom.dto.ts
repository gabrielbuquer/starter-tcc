import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateClassroomDto {
  @ApiProperty({ description: 'The name of the classroom' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
