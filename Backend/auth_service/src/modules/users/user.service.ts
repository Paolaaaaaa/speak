import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(username: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { username: username },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
