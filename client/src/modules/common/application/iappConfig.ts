export interface IAppConfig {
    localization: ILocalization;
    localeUrl: string;
    ioc: Array<any>;
    rootApi: string;
    layout: any;
    routes: Array<any>;
}
export interface ILocalization {
    lang: string;
    files: Array<string>;
}