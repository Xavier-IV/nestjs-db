import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  create(body: Partial<User>) {
    const user = this.usersRepository.create(body);
    return this.usersRepository.save(user);
  }

  async update(id: number, body: Partial<User>) {
    await this.usersRepository.update(id, body);
    return this.usersRepository.findOneBy({ id });
  }

  async destroy(id: number) {
    const result = await this.usersRepository.delete({ id });
    return result.affected;
  }
}
