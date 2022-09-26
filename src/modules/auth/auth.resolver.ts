import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
import { AuthUserInput } from './dto/auth-user.input';
import { UnauthorizedException } from '@nestjs/common';

@Resolver(() => AuthDTO)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => AuthDTO)
  async login(@Args('authUserInput') authUserInput: AuthUserInput) {
    const result = await this.authService.validateUser(authUserInput);

    return result !== null
      ? this.authService.login(result)
      : new UnauthorizedException();
  }
}
