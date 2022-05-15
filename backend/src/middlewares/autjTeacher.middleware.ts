import { NextFunction, Request, Response } from 'express';

const authTeacher = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Missing authorization headers' });
  }

  const token: string = req.headers.authorization?.split(' ')[1];

  if (token === '4b1b5d92-4a7e-4d23-a25b-b63b83e192d7') {
      return next();
  }
};
export default authTeacher;
