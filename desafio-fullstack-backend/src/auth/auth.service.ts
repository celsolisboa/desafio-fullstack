import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(private userService: UserService) { }

    async login(loginDto: LoginDto): Promise<UserDto> {
        const user = await this.userService.findOne(loginDto.email);
        if (user && user.password === loginDto.password) {
            delete user.password;
            return user;
        }
        return null;
    }

}
