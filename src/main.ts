import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { I18nValidationPipe } from 'nestjs-i18n';
import { EnvironmentInterface } from './common/configuration/environment.interface.js';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // To use nestjs-i18n in your DTO validation.json
  app.useGlobalPipes(
    new I18nValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const configService = app.get(ConfigService<EnvironmentInterface>);
  const port = configService.getOrThrow<number>('port');

  await app.listen(port);
  Logger.log(`Server started on port: ${port}`);
}
bootstrap();
