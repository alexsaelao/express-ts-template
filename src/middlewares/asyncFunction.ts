import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
    query: any
}
export type AsyncFunctionType = (req: CustomRequest, res: Response, next: NextFunction) => Promise<any>;

export default class AsyncFunction {
    public static handler = (fn: AsyncFunctionType) => (req: CustomRequest, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next);
    }
} 