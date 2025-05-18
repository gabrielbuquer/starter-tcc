import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { UserTypeGuard } from '../guard/user-type.guard';

export const RequireUserType = (type: string) =>
  applyDecorators(SetMetadata('user_type', type), UseGuards(UserTypeGuard));
