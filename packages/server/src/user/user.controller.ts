import { Body, Controller, Get } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findOne(@Body() email: UserDto) {
    const user = await this.userService.findByLogin(email);
    delete user['password'];
    return user;
  }
}
