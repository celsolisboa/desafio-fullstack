import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async Login(@Body() login: UserDto) {
    console.log(login);
    const user = await this.userService.findByLogin(login);
    delete user['password'];
    console.log(user);
    return user;
  }
}
