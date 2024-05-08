import { body, param, query } from "express-validator";
import Config from "@configs/config";
export default class CustomerValidator {
    constructor() { }

    public static getSampleValidator = () => {
        return [
            query('limit', 'invalid_limit').optional().notEmpty().isInt(Config.requestConfig.defaultPaginateMinMaxLimit),
            query('page', 'invalid_page_number').optional().notEmpty().trim().isNumeric(),
        ]
    }
    public static getSampleByIdValidator = () => {
        return [
            param('id', 'invalid_customer_id').exists().notEmpty().trim().isString().matches(Config.validatorUUID),
        ]
    }
    public static createNewSampleValidator = () => {
        return [
            body('name', 'invalid_name').exists().notEmpty().trim().isString(),
            body('email', 'invalid_email').exists().notEmpty().trim().isEmail(),
        ]
    }
    public static updateSampleValidator = () => {
        return [
            param('id', 'invalid_customer_id').exists().notEmpty().trim().isString().matches(Config.validatorUUID),
            body('name', 'invalid_name').optional().trim().isString().isLength(Config.requestConfig.defaultNameMinMaxLimit),
            body('email', 'invalid_email').optional().trim().isEmail(),
        ]
    }
    public static deleteSampleValidator = () => {
        return [
            param('id', 'invalid_customer_id').exists().notEmpty().trim().isString().matches(Config.validatorUUID),
        ]
    }
}