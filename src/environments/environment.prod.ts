// import { Environment } from '@abp/ng.core';

// const baseUrl = 'http://localhost:4200';

// export const environment = {
//   production: true,
//   application: {
//     baseUrl,
//     name: 'PAKN',
//     logoUrl: '',
//   },
//   oAuthConfig: {
//     issuer: 'https://localhost:44348/',
//     redirectUri: baseUrl,
//     clientId: 'PAKN_App',
//     responseType: 'code',
//     scope: 'offline_access PAKN',
//     requireHttps: true
//   },
//   apis: {
//     default: {
//       url: 'https://localhost:44348',
//       rootNamespace: 'VCS.PAKN',
//     },
//   },
// } 
// as Environment;



export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000' // URL API của ứng dụng
};
