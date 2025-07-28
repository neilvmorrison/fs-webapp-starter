import { HttpError } from "./HttpError";

export class NotFoundError extends HttpError {
  constructor(message: string = "Resource Not Found", details?: any) {
    super(404, "NOT_FOUND", message, details);
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
