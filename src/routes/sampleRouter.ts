import { Router } from 'express';
import SampleController from '@controllers/sampleController';
import Validator from '@middlewares/validator';
import ValidRequestConfig from '@configs/validRequestConfig';
import SampleValidator from '@middlewares/validators/sampleValidator';
// import ValidRequestConfig from '@configs/validRequestConfig';
// import CustomerValidator from '@middlewares/validators/customerValidator';

export default class SampleRouter {
    private static _instance: SampleRouter
    private readonly router: Router

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    public static getInstance(): SampleRouter {
        return SampleRouter._instance || (this._instance = new SampleRouter());
    }

    public getRouter(): Router {
        return this.router
    }

    private initializeRoutes(): void {
        this.router.get('/', SampleController.helloWorld);
        this.router.get('/sample', Validator.validateQuery(ValidRequestConfig.querySetting.sample.fetch), Validator.init(SampleValidator.getAllSampleValidator()),SampleController.getAllSample);
        this.router.get('/sample/:id',Validator.init(SampleValidator.getSampleByIdValidator()), SampleController.getSampleById);
    }
}