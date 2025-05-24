import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../constants';

@Injectable()
export class UserTypeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredType = this.reflector.get<string>(
      'user_type',
      context.getHandler()
    );

    if (!requiredType) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];

    let decoded: any;
    try {
      decoded = jwt.verify(token, jwtConstants.secret);
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }

    if (decoded.type !== requiredType) {
      throw new UnauthorizedException(
        `Only users of type "${requiredType}" are allowed`
      );
    }

    request.user = decoded;

    return true;
  }
}
