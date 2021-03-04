import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface UserPayload {
  id: string;
  email: string;
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) return next();
  const key = process.env.JWT_KEY!;

  try {
    const payload = jwt.verify(req.session.jwt, key) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
