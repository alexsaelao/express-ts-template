
export default class HttpCodeConfig {
	
	public static readonly badRequest = "BAD_REQUEST";
	public static readonly unAuthorized= "UNAUTHORIZED";
	public static readonly unAuthorizeAccess= "UNAUTHORIZE_ACCESS";
	
	public static readonly RESPONSE_FORMAT = {
        SUCCESS: {
            httpStatusCode: 200,
            message: "SUCCESS"
        },
        BAD_REQUEST: {
            httpStatusCode: 400,
            message: "BAD_REQUEST"
        },
        BAD_PARAMETER: {
            httpStatusCode: 400,
            message: "BAD_PARAMETER"
        },
        BAD_ARGUMENT: {
            httpStatusCode: 400,
            message: "BAD_ARGUMENT"
        },
        ROUTE_NOT_FOUND: {
            httpStatusCode: 404,
            message: "ROUTE_NOT_FOUND"
        },
        NOT_FOUND: {
            httpStatusCode: 404,
            message: "NOT_FOUND"
        },
        UNAUTHORIZED: {
            httpStatusCode: 401,
            message: "UNAUTHORIZED"
        },
        FORBIDDEN: {
            httpStatusCode: 403,
            message: "PERMISSION_DENIED"
        },
        PLAYER_ALREADY_EXISTS: {
            httpStatusCode: 400,
            message: "Player Already Exists"
        },
        CLIENT_ALREADY_EXISTS: {
            httpStatusCode: 400,
            message: "CLIENT_ALREADY_EXISTS"
        },
        CONFLICT: {
            httpStatusCode: 409,
            message: "CONFLICT"
        },
        UNSUPPORTED_MEDIA_TYPE: {
            httpStatusCode: 415,
            message: "UNSUPPORTED_MEDIA_TYPE"
        },
        LENGTH_REQUIRED: {
            httpStatusCode: 411,
            message: "LENGTH_REQUIRED"
        },
        METHOD_NOT_ALLOWED: {
            httpStatusCode: 405,
            message: "METHOD_NOT_ALLOWED"
        },
        REQUEST_TIMEOUT: {
            httpStatusCode: 408,
            message: "REQUEST_TIMEOUT"
        },
        PAYLOAD_TOO_LARGE: {
            httpStatusCode: 413,
            message: "PAYLOAD_TOO_LARGE"
        },
        TOO_MANY_REQUESTS: {
            httpStatusCode: 429,
            message: "TOO_MANY_REQUESTS"
        },
        SERVICE_UNAVAILABLE: {
            httpStatusCode: 503,
            message: "SERVICE_UNAVAILABLE"
        },
        GATEWAY_TIMEOUT: {
            httpStatusCode: 504,
            message: "GATEWAY_TIMEOUT"
        },
        INTERNAL_SERVER_ERROR: {
            httpStatusCode: 500,
            message: "INTERNAL_SERVER_ERROR"
        }
	};
}