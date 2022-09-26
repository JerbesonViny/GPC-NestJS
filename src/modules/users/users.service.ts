import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { encrypt } from '../../utils/secury';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './entities/user.entity';

type UserServiceParams = {
  email?: string;
  id?: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const user = this.usersRepository.create({
      firstname: createUserInput.firstname,
      lastname: createUserInput.lastname,
      email: createUserInput.email,
      password: await encrypt(createUserInput.password),
    });

    return await this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(params: UserServiceParams) {
    return this.usersRepository.findOne({
      where: {
        id: params?.id,
        email: params?.email,
      },
    });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
