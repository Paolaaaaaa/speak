import { Controller, Get, Body } from '@nestjs/common';
import { AuthenticatorService } from './authenticator.service';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly authService: AuthenticatorService) {}

  @Get('login')
  async login(@Body() loginDTO: LoginDTO) {
    return this.authService.signIn(loginDTO);
  }
}
