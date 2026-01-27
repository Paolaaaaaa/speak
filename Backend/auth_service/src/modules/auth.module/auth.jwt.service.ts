import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthJwtService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async logIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string } | undefined> {
    const auth_fr_rep = await this.userService.findOne(username);

    // if there is a password and it not null
    if (auth_fr_rep?.password) {
      // compares a plaintext password to a hashed password
      const isMatch = await bcrypt.compare(password, auth_fr_rep.password);

      if (!isMatch) {
        throw new UnauthorizedException();
      }
      const payload = { sub: username };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }
}
