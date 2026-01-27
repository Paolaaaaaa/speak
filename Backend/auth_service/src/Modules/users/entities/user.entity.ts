import { AuthenticatorEntity } from 'src/Modules/authenticator/entities/authenticator.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 36 })
  fullname: string;
  @Column({ length: 100 })
  picture: string;
  @Column({ length: 50 })
  email: string;
  @Column({ type: 'date' })
  last_update: Date;
  @Column({ type: 'date' })
  creation_Date: Date;
  @Column({ length: 100 })
  profile_description: string;

  @OneToOne(
    () => AuthenticatorEntity,
    (authenticator) => authenticator.username,
    { nullable: true },
  )
  @JoinColumn()
  authenticator: AuthenticatorEntity;
}
