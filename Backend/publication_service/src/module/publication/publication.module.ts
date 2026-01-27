import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationEntity } from './entities/publication.entity';

@Module({
  providers: [PublicationService],
  controllers: [PublicationController],
  exports: [PublicationService],
  imports: [TypeOrmModule.forFeature([PublicationEntity])],
})
export class PublicationModule {}
