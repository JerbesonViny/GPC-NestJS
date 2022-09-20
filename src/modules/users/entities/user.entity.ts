import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/entities/base.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
