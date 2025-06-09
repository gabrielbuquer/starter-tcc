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

    if (!user || user.password !== pass) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = this.extractPayload(user);

    // Defina as durações
    const accessTokenDurationSec = 60 * 60;
    const refreshTokenDurationSec = 7 * 24 * 60 * 60;

    const now = new Date();
    const accessTokenExpires = new Date(
      now.getTime() + accessTokenDurationSec * 1000,
    );
    const refreshTokenExpires = new Date(
      now.getTime() + refreshTokenDurationSec * 1000,
    );

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: `${accessTokenDurationSec}s`,
    });

    const refreshToken = await this.jwtService.signAsync(
      { sub: user.id, type: payload.type },
      { expiresIn: `${refreshTokenDurationSec}s` },
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate,
      classroom: user instanceof Student ? user.classroom?.id : null,
      type: payload.type,
      accessToken,
      refreshToken,
      accessTokenExpires: accessTokenExpires.toISOString(),
      refreshTokenExpires: refreshTokenExpires.toISOString(),
    };
  }

  async refreshToken(refreshToken: string): Promise<IAuthResponseDTO> {
    const payload = await this.jwtService
      .verifyAsync(refreshToken)
      .catch(() => null);
    if (!payload) {
      throw new UnauthorizedException('Refresh token inválido ou expirado');
    }

    const user = await this.findOne(payload.sub);
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const newPayload = this.extractPayload(user);

    const accessTokenDurationSec = 60 * 60; // 1 hora

    const now = new Date();
    const accessTokenExpires = new Date(
      now.getTime() + accessTokenDurationSec * 1000,
    );
    const refreshTokenExpires = new Date(payload.exp * 1000);

    const newAccessToken = await this.jwtService.signAsync(newPayload, {
      expiresIn: `${accessTokenDurationSec}s`,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      birthDate: user.birthDate,
      classroom: user instanceof Student ? user.classroom?.id : null,
      type: newPayload.type,
      accessToken: newAccessToken,
      refreshToken,
      accessTokenExpires: accessTokenExpires.toISOString(),
      refreshTokenExpires: refreshTokenExpires.toISOString(),
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
