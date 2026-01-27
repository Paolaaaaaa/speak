import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthenticatorEntity } from './entities/authenticator.entity';

import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login.dto';
@Injectable()
export class AuthenticatorService {
  constructor(
    @InjectRepository(AuthenticatorService)
    private readonly authenticatorRepository: Repository<AuthenticatorEntity>,
  ) {}

  async signIn(loginDTO: LoginDTO) {
    // find user
    const auth_fr_rep = await this.authenticatorRepository.findOne({
      where: { username: loginDTO.username },
    });

    // if there is a password and it not null
    if (auth_fr_rep?.password) {
      // compares a plaintext password to a hashed password
      const isMatch = await bcrypt.compare(
        loginDTO.password,
        auth_fr_rep.password,
      );

      if (!isMatch) {
        throw new UnauthorizedException();
      }
      return '';
    }
  }
}
