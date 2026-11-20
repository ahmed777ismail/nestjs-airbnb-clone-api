import { BaseCustomException } from './base-custom.exception.js';

export class NotFoundException extends BaseCustomException {
  status = 404;

  constructor(message: string) {
    super(message);
  }
}
