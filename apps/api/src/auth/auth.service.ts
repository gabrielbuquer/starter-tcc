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
  ): Promise<{ access_token: string; refresh_token: string }> {
    const user = await this.findOneByEmail(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = this.extractPayload(user);

    const refresh_token = await this.jwtService.signAsync(
      { sub: user.id, type: payload.type },
      { expiresIn: '7d' }
    );
    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token,
    };
  }

  async refreshToken(
    refresh_token: string
  ): Promise<{ access_token: string; refresh_token: string }> {
    const payload = await this.jwtService.verifyAsync(refresh_token);
    if (!payload) {
      throw new UnauthorizedException();
    }
    const user = await this.findOne(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    const newPayload = this.extractPayload(user);
    return {
      access_token: await this.jwtService.signAsync(newPayload),
      refresh_token,
    };
  }

  extractPayload(user: User) {
    let newPayload;
    if (user instanceof Student) {
      const student = user as Student;
      newPayload = {
        sub: student.id,
        email: student.email,
        classroom: student.classroom.id,
        type: 'student',
      };
    } else {
      newPayload = { sub: user.id, email: user.email, type: 'teacher' };
    }
    return newPayload;
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new Student();
    user.name = createUserDto.name;
    user.birthDate = createUserDto.birthDate;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
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
