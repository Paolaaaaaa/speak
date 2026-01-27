import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthJwtService } from './auth.jwt.service';
import { LoginDTO } from '../users/dto/login.dto';

@Controller('auth')
export class AuthJwtController {
  constructor(private authService: AuthJwtService) {}

  @HttpCode(HttpStatus.OK)
  @Get('login')
  logIn(@Body() loginDTO: LoginDTO) {
    return this.authService.logIn(loginDTO.username, loginDTO.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('SignIn')
  register(@Body() loginDTO: LoginDTO) {
    return this.authService.logIn(loginDTO.username, loginDTO.password);
  }
}
