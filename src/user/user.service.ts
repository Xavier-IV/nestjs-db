import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    return [];
  }

  findOne(id: number) {
    return id;
  }

  create(body) {
    return body;
  }

  update(id, body) {
    return body;
  }

  destroy(id: number) {
    return true;
  }
}
