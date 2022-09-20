import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('User CRUD', () => {
    it('Should create a new user', async () => {
      const user = {
        firstname: 'first',
        lastname: 'last',
        email: 'test@mail.com',
        password: '123',
      };

      const response = await service.create(user);

      expect(response.id).not.toBeNull();
    });
  });
});
