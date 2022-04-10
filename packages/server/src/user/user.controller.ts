import { Body, Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async findOne(@Body('email') email: string) {
    const user = await this.userService.findOne(email);
    delete user['password'];
    return user;
  }
}
