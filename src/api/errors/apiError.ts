class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  // Custom Error
  static customError(statusCode: number, msg: string) {
    return new ApiError(statusCode, msg);
  }

  // Level 400 Errors

  static badRequest(msg: string) {
    return new ApiError(400, msg);
  }

  static unAuthorized(msg: string) {
    return new ApiError(401, msg);
  }

  static forbidden(msg: string) {
    return new ApiError(403, msg);
  }

  static notFound(msg: string) {
    return new ApiError(404, msg);
  }

  static conflict(msg: string) {
    return new ApiError(409, msg);
  }

  static unprocessable(msg: string) {
    return new ApiError(422, msg);
  }

  // 500 Level Errors

  static serviceUnavailable(msg: string) {
    return new ApiError(503, msg);
  }

  static notImplemented(msg: string) {
    return new ApiError(501, msg);
  }

  static gatewayTimeout(msg: string) {
    return new ApiError(504, msg);
  }

  static networkTimeout(msg: string) {
    return new ApiError(599, msg);
  }

  static badGateway(msg: string) {
    return new ApiError(502, msg);
  }

  // General error (Internal server Error)
  static internal(msg: string) {
    return new ApiError(500, msg);
  }
}

export default ApiError;
