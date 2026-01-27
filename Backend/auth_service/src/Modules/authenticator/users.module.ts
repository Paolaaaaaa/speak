import { Module } from '@nestjs/common';
import { UserController } from './authenticator.controller';
import { AuthenticatorService } from './authenticator.service';

@Module({
  controllers: [UserController],
  providers: [AuthenticatorService],
  exports: [AuthenticatorService],
})
export class UsersModule {}
