import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomEntity } from './entity/classroom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClassroomEntity])],
  exports: [ClassroomService],
  providers: [ClassroomService],
  controllers: [ClassroomController]
})
export class ClassroomModule {}
