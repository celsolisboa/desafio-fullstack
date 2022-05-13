import { Request, Response } from "express";
import bcrypt from "bcrypt-nodejs";
import { PrismaClient } from "@prisma/client";
import {
  existsOrError,
  equalsOrError,
  validateEmail,
} from "../utils/validators";
import { User } from "../types/user";
import { encryptPassword } from "../utils/functions";
import jwt from "jwt-simple";
import dotenv from "dotenv";

export default class AuthController {
  async signin(req: Request, res: Response): Promise<any> {
    try {
      const prisma = new PrismaClient();
      const { email, password }: User = req.body;

      if (!email || !password)
        return res.status(400).send({ message: "Dados inválidos" });

      if (!validateEmail(email))
        return res.status(400).send("E-mail inválido!");

      const user = await prisma.user.findFirst({
        where: { email },
      });

      if (!user) {
        return res.status(400).send({
          message: `Email inválido`,
          user: user,
        });
      }

      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) return res.status(400).send({ message: `Senha inválida` });

      const now = new Date();

      const payload = {
        id: user.id,
        email: user.email,
        iat: now.getTime(),
      };

      dotenv.config();

      return res.status(200).send({
        message: `Login realizado com sucesso.`,
        response: jwt.encode(payload, process.env.LOCAL_AUTH_SECRET || ""),
      });
    } catch (error) {
      return res
        .status(500)
        .send({ message: `Erro interno no servidor`, error: error });
    }
  }

  async signup(req: Request, res: Response): Promise<any> {
    try {
      const prisma = new PrismaClient();

      const { email, password, confirmPassword }: User = req.body;

      existsOrError(email, "E-mail não informado.");
      existsOrError(password, "Senha não informada.");
      existsOrError(confirmPassword, "Confirmação de senha não informada.");
      equalsOrError(password, confirmPassword, "Senhas não conferem.");

      if (!validateEmail(email)) {
        return res
          .status(400)
          .send("E-mail inválido! Insira um e-mail válido.");
      }

      const user = await prisma.user.findFirst({ where: { email } });

      if (user) return res.status(400).send({ message: `Usuário já existe` });

      const createdUser = await prisma.user.create({
        data: {
          email,
          password: encryptPassword(password),
        },
      });

      return res
        .status(200)
        .send({ message: `Usuário criado com sucesso`, response: createdUser });
    } catch (error) {
      return res
        .status(500)
        .send({ message: `Erro interno no servidor`, error });
    }
  }
}
