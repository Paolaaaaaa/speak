import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('publication')
export class PublicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 20 })
  title: string;
  @Column({ length: 400 })
  message: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  creation_Date: Date;
}
