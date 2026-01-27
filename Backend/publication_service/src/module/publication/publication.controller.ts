import { Controller, Get, Param } from '@nestjs/common';
import { PublicationService } from './publication.service';

@Controller('publication')
export class PublicationController {
  constructor(private publicationService: PublicationService) {}
  @Get()
  async findAll() {
    return await this.publicationService.listPublications();
  }

  @Get(':publicationID')
  async findById(@Param('publicationID') publicationID: string) {
    return await this.publicationService.getPublication(publicationID);
  }
}
