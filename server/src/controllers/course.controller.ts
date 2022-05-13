import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Course } from "../types/course";
import { existsOrError } from "../utils/validators";

export default class CourseController {
  async getCourses(req: Request, res: Response): Promise<any> {
    try {
      const prisma = new PrismaClient();

      const courses = await prisma.course.findMany({
        where: { deleted: false },
      });

      const convertedCourses = courses.map((item) => {
        return {
          id: item.id,
          name: item.name,
          room: item.room,
          teacher: item.teacher,
          time: { start: item.startTime, end: item.endTime },
        };
      });

      return res.status(200).send({
        message: `Cursos encontrados com sucesso.`,
        response: convertedCourses,
      });
    } catch (error) {
      return res.status(500).send({ message: `Erro interno no servidor` });
    }
  }

  async getCourse(req: Request, res: Response): Promise<any> {
    try {
      const prisma = new PrismaClient();

      const { id } = req.params;

      const course = await prisma.course.findFirst({
        where: { id, deleted: false },
      });

      if (!course) {
        return res.status(400).send({ message: `Curso não encontrado` });
      }

      return res.status(200).send({
        message: `Curso encontrado com sucesso.`,
        response: {
          id: course.id,
          name: course.name,
          room: course.room,
          teacher: course.teacher,
          time: {
            start: course.startTime,
            end: course.endTime,
          },
        },
      });
    } catch (error) {
      return res.status(500).send({ message: `Erro interno no servidor` });
    }
  }

  async createCourse(req: Request, res: Response): Promise<any> {
    try {
      const prisma = new PrismaClient();

      const { name, room, teacher, time }: Course = req.body;

      if (
        !name ||
        !room.length ||
        !teacher.length ||
        !time.start ||
        !time.end
      ) {
        return res.status(400).send({ message: "Dados inválidos" });
      }

      const course = await prisma.course.create({
        data: {
          name,
          room,
          teacher,
          startTime: time.start,
          endTime: time.end,
        },
      });

      return res.status(200).send({
        message: `Curso criado com sucesso.`,
        response: {
          id: course.id,
          name: course.name,
          room: course.room,
          teacher: course.teacher,
          time: {
            start: course.startTime,
            end: course.endTime,
          },
        },
      });
    } catch (error) {
      return res.status(500).send({ message: `Erro interno no servidor` });
    }
  }

  async updateCourse(req: Request, res: Response): Promise<any> {
    try {
      const prisma = new PrismaClient();

      const { id } = req.params;

      const { name, room, teacher, time }: Course = req.body;

      if (
        !name ||
        !room.length ||
        !teacher.length ||
        !time.start ||
        !time.end
      ) {
        return res.status(400).send({ message: "Dados inválidos" });
      }

      const course = await prisma.course.findFirst({
        where: { id: req.params.id, deleted: false },
      });

      if (!course) {
        return res.status(400).send({ message: `Curso não encontrado` });
      }

      const updatedCourse = await prisma.course.update({
        where: { id },
        data: { name, room, teacher, startTime: time.start, endTime: time.end },
      });

      return res.status(200).send({
        message: `Curso atualizado com sucesso.`,
        response: {
          id: updatedCourse.id,
          name: updatedCourse.name,
          room: updatedCourse.room,
          teacher: updatedCourse.teacher,
          time: {
            start: updatedCourse.startTime,
            end: updatedCourse.endTime,
          },
        },
      });
    } catch (error) {
      return res.status(500).send({ message: `Erro interno no servidor` });
    }
  }

  async deleteCourse(req: Request, res: Response): Promise<any> {
    try {
      const prisma = new PrismaClient();
      const { id } = req.params;

      const course = await prisma.course.findFirst({
        where: { id, deleted: false },
      });

      if (!course) {
        return res.status(400).send({ message: `Curso não encontrado` });
      }

      await prisma.course.update({
        where: { id },
        data: { deleted: true },
      });

      return res.status(200).send({ message: `Curso deletado com sucesso.` });
    } catch (error) {
      return res.status(500).send({ message: `Erro interno no servidor` });
    }
  }
}
