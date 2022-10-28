import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../../base/dto/base.dto';
import { UserDTO } from '../../users/dto/user.dto';

@ObjectType()
export class EventDTO extends BaseDTO {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: false })
  type_bike: string;

  @Field({ nullable: false })
  meeting: string;

  @Field({ nullable: false })
  intensity: string;

  @Field({ nullable: false })
  type_route: string;

  @Field({ nullable: false })
  origin_latitude: number;

  @Field({ nullable: false })
  origin_longitude: number;

  @Field({ nullable: false })
  destination_latitude: number;

  @Field({ nullable: false })
  destination_longitude: number;

  @Field(() => UserDTO)
  user: UserDTO;
}
