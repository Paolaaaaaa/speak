import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  creation_Date: Date;
}
