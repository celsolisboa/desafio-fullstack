/* eslint-disable no-unused-vars */
import { TeacherTypes } from '../repositories';

declare global {
  namespace Express {
    interface Request {
      email: string;
      password: string;
      permission: string;
    }
  }
}
