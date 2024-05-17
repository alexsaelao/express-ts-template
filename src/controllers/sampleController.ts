import ResponseHandler from '@utils/responseHandler';
import AsyncFunction from '@middlewares/asyncFunction';
import InterfaceMiddleware from '@middlewares/interfaceMiddleware';
import SampleInterface from '@interfaces/sampleInterface';

export default class SampleController extends InterfaceMiddleware {
    constructor() {
        super();
    }
    public static helloWorld = AsyncFunction.handler(async (req, res) => {
        return res.send(ResponseHandler.successResponse('Hello World'));
    });

    public static getAllSample = AsyncFunction.handler(async (req, res) => {
        let { limit, page } = req.query;
        limit = parseInt(limit) > 0 ? limit : 10;
        page = parseInt(page) > 0? page : 1;
        
        const samples = await SampleInterface.fetchAllSample(limit, page);
        return res.send(ResponseHandler.successResponse(samples));
    });
    public static getSampleById = AsyncFunction.handler(async (req, res) => {
        let { id } = req.params;
        
        const samples = await SampleInterface.fetchSampleById(id);
        return res.send(ResponseHandler.successResponse(samples));
    });
}