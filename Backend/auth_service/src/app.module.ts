import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './modules/users/users.module';
import { AppController } from './app.controller';
import { AuthJwtModule } from './modules/auth.module/auth.jwt.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    UsersModule,
    AuthJwtModule,

    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '130s' },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'speak_postgres_db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres_speak_db',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
