import ResponseHandler from '@utils/responseHandler';
import AsyncFunction from '@middlewares/asyncFunction';
import Config from "@configs/config";

export default class SampleController {
    public static helloWorld = AsyncFunction.handler(async (req, res) => {
        return res.send(ResponseHandler.successResponse('Hello World'));
    });
}