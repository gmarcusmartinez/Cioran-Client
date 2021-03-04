import { Request, Response, NextFunction } from 'express';
import { IUserProject } from '../interfaces';
interface UserPayload {
    id: string;
    email: string;
    name: string;
    projects: IUserProject[];
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => void;
export {};
