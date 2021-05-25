import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken'
import authConfig from '../config/auth'

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction
): void{
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token não enviado.')
  }

  const [,token] = authHeader.split(' ');

  try{
    const decoded = verify(token, authConfig.jwt.secret);

    const {sub} = decoded as TokenPayload;

    request.user = {
      id: sub,
    }

    console.log(decoded);

    return next();
  } catch {
    throw new Error('Token invalido.')
  }



}