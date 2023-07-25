export class AppConsts {

    static remoteServiceBaseUrl: "http://192.168.1.10:3032";
    static appBaseUrl: string;
    static appBaseHref: string; // returns angular's base-href parameter value if used during the publish

    static localeMappings: any = [];

    static readonly userManagement = {
        defaultAdminUserName: 'admin'
    };

    static readonly localization = {
        defaultLocalizationSourceName: 'PhanAnhKienNghi'
    };

    static readonly authorization = {
        encryptedAuthTokenName: 'enc_auth_token'
    };

    
}

export class UrlParams {
    static TGTOKEN = 'TGT';
    static STOKEN = 'ST';
    static ACTION = 'Action';
    static REQUEST_ID = 'RequestId';
    static RETURN_URL = 'ReturnUrl';
    static SERVICE_URL = 'SVC';
    static USER_PREFIX = 'Prefix';
    static USER_SUFFIX = 'Suffix';
  }
  
  const urlParams = new UrlParams();
  export default urlParams;
