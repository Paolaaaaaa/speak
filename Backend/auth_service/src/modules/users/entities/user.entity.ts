import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn({ length: 36 })
  username: string;
  @Column({ length: 36 })
  password: string;
  @Column()
  role: string;
  @Column()
  picture: string;
  @Column({ type: 'timestamptz' })
  last_update: Date;
  @Column({ type: 'timestamptz' })
  creation_Date: Date;
  @Column({ length: 100 })
  profile_description: string;
}
