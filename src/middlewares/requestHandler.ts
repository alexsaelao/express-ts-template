import AsyncFunction from './asyncFunction';

export default class LoggerMiddleware {
    private static _instance: LoggerMiddleware;

    public static getInstance(): LoggerMiddleware {
        return this._instance || (this._instance = new LoggerMiddleware());
    }

    public logger = AsyncFunction.handler(async (req, res, next) => {
        console.log(`${req.method} ${req.path}`);
        next();
    })
}