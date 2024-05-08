import ResponseHandler from '@utils/responseHandler';
import AsyncFunction from '@middlewares/asyncFunction';
import InterfaceMiddleware from '@middlewares/interfaceMiddleware';

export default class SampleController extends InterfaceMiddleware {
    public static helloWorld = AsyncFunction.handler(async (req, res) => {
        return res.send(ResponseHandler.successResponse('Hello World'));
    });
}