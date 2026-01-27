import { Injectable, NotFoundException } from '@nestjs/common';
import { PublicationEntity } from './entities/publication.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(PublicationEntity)
    private readonly publicationRepository: Repository<PublicationEntity>,
  ) {}

  async getPublication(id: string): Promise<PublicationEntity> {
    const publication = await this.publicationRepository.findOne({
      where: { id: id },
    });

    if (!publication) {
      throw new NotFoundException();
    }
    return publication;
  }

  async listPublications(): Promise<PublicationEntity[]> {
    const publications = await this.publicationRepository.find();
    return publications;
  }

  async create(publication: PublicationEntity): Promise<PublicationEntity> {
    return await this.publicationRepository.save(publication);
  }
}
