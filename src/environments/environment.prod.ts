const packageJson = require('../../package.json');

const HOST = 'https://app.tseprogramacion.com';
export const environment = {
  API_PUBLIC: HOST + '/',
  production: true,
  context: 'prod',
  version: packageJson.version,
  minutesInactive: 20,
  minutesToRefresh: 10,
};
