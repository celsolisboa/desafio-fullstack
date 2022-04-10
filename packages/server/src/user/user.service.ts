import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findByLogin(login: UserDto): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: login.email,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (login.password !== user.password) {
      throw new UnauthorizedException('Senha inválida');
    }

    return user;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('Usuário não cadastrado');
    } else {
      return user;
    }
  }
}
