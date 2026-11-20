import { BaseCustomException } from './base-custom.exception.js';

export class BadRequestException extends BaseCustomException {
  status = 400;

  constructor(message: string) {
    super(message);
  }
}
