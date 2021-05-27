import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entity/user.entity';
import { CourseModule } from './course/course.module';
import { TeacherModule } from './teacher/teacher.module';
import { TeacherEntity } from './teacher/entity/teacher.entity';
import { ClassroomModule } from './classroom/classroom.module';
import { ClassroomEntity } from './classroom/entity/classroom.entity';
import { CourseEntity } from './course/entity/course.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      entities: [UserEntity, TeacherEntity, ClassroomEntity, CourseEntity]
    }),
    AuthModule,
    UserModule,
    CourseModule,
    TeacherModule,
    ClassroomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
