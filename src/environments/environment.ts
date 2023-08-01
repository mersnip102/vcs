// import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'PAKN',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44348/',
    redirectUri: baseUrl,
    clientId: 'PAKN_App',
    responseType: 'code',
    scope: 'offline_access PAKN',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44348',
      rootNamespace: 'VCS.PAKN',
    },
  },
}

export const environmentAPI = {
  REACT_APP_API_URL: 'https://localhost:44384/api/v1',
REACT_APP_SSO_SITE_URL: 'https://cas.phanmemvcs.com/Authenticate.aspx',
REACT_APP_SSO_SITE_CHGPASS: 'https://cas.phanmemvcs.com/ChangePassword.aspx',
// REACT_APP_LOGIN_URL: 'http://192.168.1.10:3035/auth/login',
// REACT_APP_DEFAULT_URL: 'http://192.168.1.10:3035',

REACT_APP_LOGIN_URL: 'http://localhost:4200/auth/login',
REACT_APP_DEFAULT_URL: 'http://localhost:4200',

  // REACT_APP_API_URL: "https://localhost:44384/api/v1",
  // REACT_APP_SSO_SITE_URL: 'https://projectydev.phanmemvcs.com',
  // REACT_APP_SSO_SITE_CHGPASS: "https://cas.phanmemvcs.com/ChangePassword.aspx",
  // REACT_APP_LOGIN_URL: "http://localhost:4200",
  // REACT_APP_DEFAULT_URL: "http://localhost:3000/"
}
export const REACT_APP_URL_SEND_STOKEN = function(requestUrl: string, tgtoken: string) {
  return `https://cas.phanmemvcs.com/Authenticate.aspx?ReturnUrl=${requestUrl}&TGT=${tgtoken}&SVC=https://projectydev.phanmemvcs.com/`
}
//  as Environment;
