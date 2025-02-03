const packageJson = require('../../package.json');
const HOST = 'https://v3qjxxwlm1.execute-api.us-east-1.amazonaws.com/develop';
export const environment = {
  API_PUBLIC: HOST + '/',
  production: false,
  context: 'develop',
  version: packageJson.version,
  minutesInactive: 15,
  minutesToRefresh: 10,
};
