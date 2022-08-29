export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = status;
    this.message = message;
  }
}
