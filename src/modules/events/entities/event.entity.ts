import { Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../base/entities/base.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity()
export class EventEntity extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  type_bike: string;

  @Column({ nullable: false })
  meeting: string;

  @Column({ nullable: false })
  intensity: string;

  @Column({ nullable: false })
  type_route: string;

  @Column({ nullable: false })
  origin_latitude: number;

  @Column({ nullable: false })
  origin_longitude: number;

  @Column({ nullable: false })
  destination_latitude: number;

  @Column({ nullable: false })
  destination_longitude: number;

  @Column()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity;
}
