import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../constants';

export const GetClassroom = createParamDecorator(
  (_data: unknown,ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];

    let decoded: any;
    try {
      decoded = jwt.verify(token, jwtConstants.secret);
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }


    if (!decoded.classroom) {
      throw new UnauthorizedException('Classroom not found in token');
    }

    return decoded.classroom;
  }
);
