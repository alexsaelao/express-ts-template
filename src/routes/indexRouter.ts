import { Router } from 'express';
import SampleRouter from '@routes/sampleRouter';

export default class IndexRouter {
    private static _instance: IndexRouter;
    private readonly router: Router;

    private constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    public static getInstance(): IndexRouter {
        return IndexRouter._instance || (this._instance = new IndexRouter());
    }
    public getRouter(): Router {
		return this.router;
	}

    private initializeRoutes(): void {
        this.router.use('/', SampleRouter.getInstance().getRouter());
    }
}