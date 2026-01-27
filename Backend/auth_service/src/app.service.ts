import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getJWT(): string {
    return this.configService.get<string>('JWT_KEY') || '';
  }
}
