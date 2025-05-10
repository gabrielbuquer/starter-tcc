import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '../../auth/dto/create-user.dto';

export class CreateStudentDto extends CreateUserDto {}
