import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from '../../../base/dto/base.dto';

@ObjectType()
export class UserDTO extends BaseDTO {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;
}
