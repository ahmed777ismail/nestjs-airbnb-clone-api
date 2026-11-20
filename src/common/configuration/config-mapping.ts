import { developmentEnv } from './environment-modes/development.env.js';
import { productionEnv } from './environment-modes/production.env.js';
import { stagingEnv } from './environment-modes/staging.env.js';
import { EnvironmentInterface } from './environment.interface.js';

const environments: Record<string, () => EnvironmentInterface> = {
  development: developmentEnv,
  staging: stagingEnv,
  production: productionEnv,
};

export default (): EnvironmentInterface => {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const getEnvToLoad = environments[nodeEnv] || developmentEnv;

  console.log(`[Configuration] Loading environment: ${nodeEnv}]`);

  return getEnvToLoad();
};
