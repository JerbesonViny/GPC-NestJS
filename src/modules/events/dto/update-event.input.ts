import { CreateEventInput } from './create-event.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventInput {
  @Field(() => ID)
  id: string;

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
}
