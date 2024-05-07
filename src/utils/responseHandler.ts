
export default class ResponseHandler {
    public static successResponse(data: any) {
        // console.log('result:', data);
        return (typeof(data) === "string") ? { message: data } : data;
    }
}