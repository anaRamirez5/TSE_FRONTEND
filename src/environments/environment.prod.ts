const packageJson = require('../../package.json');

const HOST = 'https://pjfdke07sh.execute-api.us-east-1.amazonaws.com/prod';
export const environment = {
  API_PUBLIC: HOST + '/',
  production: true,
  context: 'prod',
  version: packageJson.version,
  minutesInactive: 15,
  minutesToRefresh: 10,
};
