import { Request, Response, NextFunction } from 'express';
import ApiError from './apiError';

export default class ErrorHandlerMiddleware {
    private static _instance: ErrorHandlerMiddleware;

    public static getInstance(): ErrorHandlerMiddleware {
        return this._instance || (this._instance = new ErrorHandlerMiddleware());
    }

    public errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
        try {
            console.error(err);
            if (err instanceof ApiError && err?.httpStatusCode && err?.message) {
                const message: any = err?.message;
                return ApiError.handler(new ApiError.CustomError(err.httpStatusCode, message), res);
            } else {
                return ApiError.handler(new ApiError.InternalError(), res);
            }
        } catch (error) {
            console.error(err); 
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}