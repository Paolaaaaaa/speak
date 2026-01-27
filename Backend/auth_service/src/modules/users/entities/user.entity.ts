import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryColumn({ length: 30 })
  username: string;
  @Column({ length: 100 })
  password: string;
  @Column()
  role: string;
  @Column()
  picture: string;
  @Column({ type: 'timestamptz' })
  last_update: Date;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  creation_date: Date;
}
