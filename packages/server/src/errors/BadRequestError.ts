import { HttpError } from "./HttpError";

export class BadRequestError extends HttpError {
  constructor(message: string = "Bad Request", details?: any) {
    super(400, "BAD_REQUEST", message, details);
    this.name = "BadRequestError";
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
