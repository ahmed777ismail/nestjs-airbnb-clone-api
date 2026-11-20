import { EnvironmentInterface } from '../environment.interface.js';
import { defaultEnv } from './default.env.js';

export const developmentEnv = (): EnvironmentInterface => ({
  ...defaultEnv(),
  // add development-specific env, override default env
  // port: 4000,
  // email
});
