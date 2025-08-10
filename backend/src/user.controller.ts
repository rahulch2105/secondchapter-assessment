import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() body: { username: string; password: string }): Promise<User> {
    return this.userService.createUser(body.username, body.password);
  } @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
