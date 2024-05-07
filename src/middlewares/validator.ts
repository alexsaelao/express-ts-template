import AsyncFunction from "./asyncFunction"
import ApiError from "./apiError";
import { validationResult } from 'express-validator';

export default class Validator {
    constructor() { }

    public static validateBody = (requestBody?: Array<any>) => {
        return AsyncFunction.handler(async (req, res, next) => {
            const parameters = Object.keys(req.body);
            let isValid = true;
            requestBody? isValid = parameters.every((parameter) => requestBody?.includes(parameter)) : isValid;
            if (isValid) return next();
            throw new ApiError.BadRequestError('invalid_body_request_parameters');
        });
    }
    public static validateQuery= (requestParam?: Array<any>) => {
        return AsyncFunction.handler(async (req, res, next) => {
            const parameters = Object.keys(req.query);
            let isValid = true;
            requestParam? isValid = parameters.every((parameter) => requestParam?.includes(parameter)) : isValid;
            if (isValid) return next();
            throw new ApiError.BadRequestError('invalid_query_request_parameters');
        });
    }
    public static expressValidator = () => {
        return AsyncFunction.handler(async (req, res, next) => {
            const errors = validationResult(req);
            if (errors.isEmpty()) return next();
            const errMsg = errors?.array({ onlyFirstError: true })[0]?.msg;
            throw new ApiError.BadRequestError(errMsg);
        });
    }
    public static init = (validateRequest?: any) => {
        return [
            validateRequest? validateRequest: AsyncFunction.handler(async (req, res, next) => next()),
            this.expressValidator()
        ]
    }
}