import { BaseCustomException } from './base-custom.exception.js';

export class ForbiddenException extends BaseCustomException {
  status = 403;

  constructor(message: string) {
    super(message);
  }
}
