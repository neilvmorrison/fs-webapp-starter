import { HttpError } from "./HttpError";

export class ValidationError extends HttpError {
  constructor(message: string = "Validation Error", details?: any) {
    super(422, "VALIDATION_ERROR", message, details); // 422 Unprocessable Entity is common for validation
    this.name = "ValidationError";
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
