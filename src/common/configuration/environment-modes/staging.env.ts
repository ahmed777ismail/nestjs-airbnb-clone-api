import { EnvironmentInterface } from '../environment.interface.js';
import { defaultEnv } from './default.env.js';

export const stagingEnv = (): EnvironmentInterface => ({
  ...defaultEnv(),
  // add staging-specific env, override default env
  //port: 5001,
  // email
});
