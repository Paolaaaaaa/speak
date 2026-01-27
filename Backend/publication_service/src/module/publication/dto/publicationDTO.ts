import { IsNotEmpty, IsString } from 'class-validator';

export class PublicationDTO {
  @IsString()
  @IsNotEmpty()
  token: string;
}
