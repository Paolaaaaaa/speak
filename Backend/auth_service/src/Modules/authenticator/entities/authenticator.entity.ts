import { UserEntity } from 'src/Modules/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('authentication')
export class AuthenticatorEntity {
  @PrimaryColumn({ length: 36 })
  username: string;
  @Column()
  password: string;
  @Column()
  role: string;
  @Column({ type: 'date' })
  creation_Date: Date;
  @Column({ type: 'date' })
  last_update: Date;
  @OneToOne(() => UserEntity, (user) => user.authenticator)
  user: UserEntity;
}
