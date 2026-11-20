import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import path from 'node:path';
import { envSchema } from './common/configuration/env-schema-validation.js';
import configMapping from './common/configuration/config-mapping.js';
import { EnvironmentInterface } from './common/configuration/environment.interface.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envSchema,
      load: [configMapping],
    }),

    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService<EnvironmentInterface>) => ({
        fallbackLanguage: configService.getOrThrow('fullbackLanguage'),
        loaderOptions: {
          path: path.join(__dirname, '/i18n/'),
          watch: true,
        },
      }),

      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
      inject: [ConfigServicee],
    }),
  ],
})
export class CoreModule {}
