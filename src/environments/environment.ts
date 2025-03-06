const packageJson = require('../../package.json');
const HOST = 'https://app.tseprogramacion.com';
export const environment = {
  API_PUBLIC: HOST + '/',
  production: false,
  context: 'develop',
  version: packageJson.version,
  minutesInactive: 15,
  minutesToRefresh: 10,
};
