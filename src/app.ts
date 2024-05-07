import express, { Express, Request, Response, NextFunction } from 'express';
import IndexRouter from '@routes/indexRouter';
import cros from 'cors';
import LoggerMiddleware from '@middlewares/requestHandler';
import ErrorHandlerMiddleware from '@middlewares/errorHandler';
import ApiError from '@middlewares/apiError';
import moment from 'moment';

export default class App {
    private static _instance: App;
    private readonly app: Express;

    private constructor() {
        this.app = express();
        this.configure();
        this.setupMiddlewares();
        this.mountRoutes();
        this.setupErrorHandling();
    }
    // Returns the Express application instance.
    public getApp(): Express {
        return this.app;
    }
    
    // Returns the singleton instance of the App class.
    // If an instance does not exist, it creates a new one.
    public static getInstance(): App {
        return this._instance || (this._instance = new App());
    }

    // Configures the Express application instance with middleware functions.
    private configure(): void {
        this.app.use(cros()); // Enable Cross-Origin Resource Sharing (CORS)
        this.app.use(express.json()); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
        this.app.use(express.urlencoded({ extended: true })); // This middleware allows encoding of URL-encoded bodies.

        // Logs a timestamped message to the console when the application is running in development mode.
        process.env.NODE_ENV === 'development' ? console.log = (...args: any[]) => console.info(`${moment().format('YYYY-MM-DD HH:mm:ss')} -`, ...args) : null;
    }

    // Mounts the routes of the application.
    private mountRoutes(): void {
        this.app.use('/', IndexRouter.getInstance().getRouter());

        // Middleware function that handles requests that do not match any routes (404).
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            return ApiError.handler(new ApiError.RouteNotFoundError(), res);
        });
    }

    // Sets up and registers the middleware functions for the Express application.
    private setupMiddlewares(): void {
        this.app.use(LoggerMiddleware.getInstance().logger);
    }

    // Sets up and registers the error handling middleware functions for the Express application.
    private setupErrorHandling(): void {
        this.app.use(ErrorHandlerMiddleware.getInstance().errorHandler);
    }
}
