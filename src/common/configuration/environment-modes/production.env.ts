import { EnvironmentInterface } from '../environment.interface.js';
import { defaultEnv } from './default.env.js';

export const productionEnv = (): EnvironmentInterface => ({
  ...defaultEnv(),
  // add production-specific env, override default env
  // port: 6000,
  // email
});
