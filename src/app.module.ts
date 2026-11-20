import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CoreModule } from './core.module.js';
import { CustomExceptionFilter } from './common/errors-handling/filters/custom-exception.filter.js';

@Module({
  imports: [CoreModule],
  providers: [{ provide: APP_FILTER, useClass: CustomExceptionFilter }],
})
export class AppModule {}
