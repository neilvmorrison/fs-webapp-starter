import { Context, Next } from "koa";
import { HttpError } from "../errors/HttpError";

interface StandardErrorResponse {
  status: "error";
  statusCode: number;
  code: string;
  message: string;
  details?: any;
  timestamp: string;
  path?: string;
  stack?: string;
}

export const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      throw new HttpError(
        404,
        "NOT_FOUND",
        `Route ${ctx.method} ${ctx.path} not found.`
      );
    }
  } catch (err: any) {
    const isDevelopment = process.env.NODE_ENV === "development";

    let statusCode: number = err.statusCode || 500;
    let code: string = err.code || "INTERNAL_SERVER_ERROR";
    let message: string = err.message || "An unexpected error occurred.";
    let details: any = err.details || null;

    console.error(`Error encountered for ${ctx.method} ${ctx.path}:`, err);

    if (err.name === "JsonWebTokenError") {
      statusCode = 401;
      code = "INVALID_TOKEN";
      message = "Invalid authentication token.";
    } else if (err.name === "TokenExpiredError") {
      statusCode = 401;
      code = "TOKEN_EXPIRED";
      message = "Authentication token has expired.";
    } else if (err.status === 401 && !err.statusCode) {
      statusCode = 401;
      code = "UNAUTHORIZED";
      message = "Unauthorized access.";
    } else if (err.status === 403 && !err.statusCode) {
      statusCode = 403;
      code = "FORBIDDEN";
      message = "Access denied.";
    } else if (err.name === "CastError" && err.kind === "ObjectId") {
      statusCode = 400;
      code = "INVALID_ID";
      message = "Provided ID is invalid.";
      details = { value: err.value, path: err.path };
    }

    if (!(err instanceof HttpError) && !isDevelopment) {
      message = "An unexpected server error occurred. Please try again later.";
      code = "UNEXPECTED_SERVER_ERROR";
      details = null;
    }

    ctx.status = statusCode;
    ctx.body = {
      status: "error",
      statusCode: statusCode,
      code: code,
      message: message,
      details: details,
      timestamp: new Date().toISOString(),
      path: ctx.path,
      ...(isDevelopment && { stack: err.stack }),
    } as StandardErrorResponse;

    ctx.app.emit("error", err, ctx);
  }
};
