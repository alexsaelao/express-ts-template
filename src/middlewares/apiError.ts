import HttpCodeConfig from "@configs/httpCodeConfig";
import { Response } from "express";
export default abstract class ApiError extends Error {
    [x: string]: any; 
    constructor(public httpStatusCode: number, message: string) {
        super(message);
    }

    public static handler = (error: ApiError, res: Response) => {
        res.status(error.httpStatusCode).send({ message: error.message });
    }

    public static InternalError = class extends ApiError {
        constructor(message: string = HttpCodeConfig.RESPONSE_FORMAT.INTERNAL_SERVER_ERROR.message) {
            super(HttpCodeConfig.RESPONSE_FORMAT.INTERNAL_SERVER_ERROR.httpStatusCode, message);         
        }
    }
    public static RouteNotFoundError = class extends ApiError {
		constructor(message: string = HttpCodeConfig.RESPONSE_FORMAT.ROUTE_NOT_FOUND.message) {
			super(HttpCodeConfig.RESPONSE_FORMAT.ROUTE_NOT_FOUND.httpStatusCode, message);
		}
	};
	public static BadRequestError = class extends ApiError {
		constructor(message: string = HttpCodeConfig.RESPONSE_FORMAT.BAD_REQUEST.message) {
			super(HttpCodeConfig.RESPONSE_FORMAT.BAD_REQUEST.httpStatusCode, message);
		}
	};
    public static CustomError = class extends ApiError {
		constructor(httpStatusCode: number, message: string) {
			super(httpStatusCode, message);
		}
	};
    
	public static NotFoundError = class extends ApiError {
		constructor(message: string = HttpCodeConfig.RESPONSE_FORMAT.NOT_FOUND.message) {
			super(HttpCodeConfig.RESPONSE_FORMAT.NOT_FOUND.httpStatusCode, message);
		}
	};
}