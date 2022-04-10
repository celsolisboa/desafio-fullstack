import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';
import { Course } from '@prisma/client';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    try {
      await this.prisma.course.create({
        data: {
          name: createCourseDto.name,
          start_time: createCourseDto.start_time,
          finish_time: createCourseDto.finish_time,
          classroom_number: createCourseDto.classroom_number,
          instructor_name: createCourseDto.instructor_name,
        },
      });
      return;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async findAll(): Promise<Course[]> {
    return this.prisma.course.findMany();
  }

  async findOne(id: number): Promise<Course> {
    return this.prisma.course.findUnique({ where: { id } });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    return this.prisma.course.update({
      data: {
        name: updateCourseDto.name,
        start_time: updateCourseDto.start_time,
        finish_time: updateCourseDto.finish_time,
        classroom_number: updateCourseDto.classroom_number,
        instructor_name: updateCourseDto.instructor_name,
      },
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
