import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { PublicationService } from './publication.service';

@Controller('publication')
export class PublicationController {
  constructor(private publicationService: PublicationService) {}
  @Get()
  async findAll() {
    return await this.publicationService.listPublications();
  }

  @Get(':publicationID')
  async findById(
    @Param('publicationID', new ParseUUIDPipe({ version: '4' }))
    publicationID: string,
  ) {
    return await this.publicationService.getPublication(publicationID);
  }
}
