import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseEntity } from './entity/course.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CourseEntity])],
    providers: [CourseService],
    controllers: [CourseController]
})
export class CourseModule { }