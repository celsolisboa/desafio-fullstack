import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TeacherEntity } from './entity/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherEntity])],
  providers: [TeacherService],
  controllers: [TeacherController]
})
export class TeacherModule {}
