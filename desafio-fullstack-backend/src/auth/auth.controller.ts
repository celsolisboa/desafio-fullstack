import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    async login(@Body() loginDto: LoginDto, @Res() response) {

        try {
            const result = await this.authService.login(loginDto)
            if (!result) {
                return response.status(HttpStatus.FORBIDDEN).send('invalid credentials')
            }

            return response.status(HttpStatus.OK).send(result);
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }

}
