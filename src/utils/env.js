import _ from 'lodash';

// Get the environment variable specified by key.
export function getEnv(key) {
  // We first check process.env and then fallback onto window.env.
  // The webpack dev server will replace all instances of process.env with the actual values.
  const p = process.env[key];

  /**
   * Return the process variable if it exists or if we are using the webpack development server.
   * The dev server runs in development mode (whereas the built bundle will have production mode).
   */
  if (p || process.env.NODE_ENV === 'development') {
    return p;
  }
  // If process doesn't exist then the variable should be attached to the window object.
  return _.get(window, ['env', key]);
}
