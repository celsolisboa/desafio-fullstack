import { Request, Response } from 'express';
import { loginTeacherService } from '../../services';

const loginTeacherController = async (req: Request, res: Response) => {
  try {
    const responseData = await loginTeacherService(req.body);

    if (!responseData) {
      return res.status(401).json({ message: 'Wrong email/password' });
    }

    return res.status(200).json(responseData);
  } catch (error) {
      return res.status(error.status).json(error);
  }
};

export default loginTeacherController;
