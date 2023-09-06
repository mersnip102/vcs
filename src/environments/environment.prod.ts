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



export const danhMucUrl = {
  production: false,
  apiUrl: 'http://localhost:3000' // URL API của ứng dụng
};

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000' // URL API của ứng dụng
};



export const environment2 = {
  production: false,
  apiUrl: 'http://localhost:8081/api' // URL API của ứng dụng
};


export const reportAPI = {
  production: false,
  apiUrl: 'http://192.168.1.10:3032/api/v1/reports' // URL API của ứng dụng
};


