import { Module } from '@nestjs/common';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { PrismaModule } from './prisma.module';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [CourseController],
  providers: [CourseService, PrismaService],
})
export class AppModule {}
