import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Student } from '../student/entities/student.entity';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { IAuthResponseDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<IAuthResponseDTO> {
    const user = await this.findOneByEmail(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = this.extractPayload(user);

    const refreshToken = await this.jwtService.signAsync(
      { sub: user.id, type: payload.type },
      { expiresIn: '7d' },
    );
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate,
      classroom: user instanceof Student ? user.classroom.id : null,
      type: payload.type,
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
      }),
      refreshToken,
    };
  }

  async refreshToken(refreshToken: string): Promise<IAuthResponseDTO> {
    const payload = await this.jwtService.verifyAsync(refreshToken);
    if (!payload) {
      throw new UnauthorizedException();
    }
    const user = await this.findOne(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    const newPayload = this.extractPayload(user);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate,
      classroom: user instanceof Student ? user.classroom.id : null,
      type: payload.type,
      accessToken: await this.jwtService.signAsync(newPayload),
      refreshToken,
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
