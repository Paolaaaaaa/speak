import { Module } from '@nestjs/common';
import { AuthJwtService } from './auth.jwt.service';
import { UsersModule } from '../users/users.module';
import { AuthJwtController } from './auth.jwt.controller';

@Module({
  controllers: [AuthJwtController],
  providers: [AuthJwtService],
  imports: [UsersModule],
})
export class AuthJwtModule {}
