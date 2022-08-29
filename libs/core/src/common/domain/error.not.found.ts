export class NotFoundError extends Error {
  constructor(message = 'no encontrado') {
    super(message);
    this.message = message;
  }
}
