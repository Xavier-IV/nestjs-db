import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  index(): any[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): number {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() body): number {
    return this.userService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  destroy(@Param('id', ParseIntPipe) id: number): boolean {
    return this.userService.destroy(id);
  }
}
