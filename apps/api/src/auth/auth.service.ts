import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Student } from '../student/entities/student.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string
  ): Promise<{ access_token: string }> {
    const user = await this.findOneByEmail(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    let payload;
    if (user instanceof Student) {
      const student = user as Student;
      payload = {
        sub: student.id,
        email: student.email,
        classroom: student.classroom.id,
        type: 'student',
      };
    } else {
      payload = { sub: user.id, email: user.email, type: 'teacher' };
    }
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new Student();
    user.name = createUserDto.name;
    user.birthDate = createUserDto.birthDate;
    user.email = createUserDto.email;
    user.password = createUserDto.password; //TODO: encrypt the password
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }
}
