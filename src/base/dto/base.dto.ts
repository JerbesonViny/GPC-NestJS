import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;
}
