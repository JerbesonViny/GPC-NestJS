import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../base/entities/base.entity';
import { EventEntity } from '../../events/entities/event.entity';

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

  @OneToMany(() => EventEntity, (event) => event.user)
  events: EventEntity[];
}
