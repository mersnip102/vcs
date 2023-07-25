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
  REACT_APP_API_URL: "https://localhost:44384/api/v1",
  REACT_APP_SSO_SITE_URL: "https://projectydev.phanmemvcs.com",
  REACT_APP_SSO_SITE_CHGPASS: "https://cas.phanmemvcs.com/ChangePassword.aspx",
  REACT_APP_LOGIN_URL: "http://localhost:3000/login",
  REACT_APP_DEFAULT_URL: "http://localhost:3000/"
}
//  as Environment;
