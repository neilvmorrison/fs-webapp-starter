import { HttpError } from "./HttpError";

export class ForbiddenError extends HttpError {
  constructor(message: string = "Forbidden", details?: any) {
    super(403, "FORBIDDEN", message, details);
    this.name = "ForbiddenError";
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}
