import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicationModule } from './module/publication/publication.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationEntity } from './module/publication/entities/publication.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PublicationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'speak_postgres_db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres_speak_db',
      entities: [PublicationEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
