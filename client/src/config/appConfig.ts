import { IAppConfig, LANG, Locale } from "@app/common";
import helperFacade from "@app/common";
import { DefaultLayout } from "@app/themes/default";

import modules from "./modules";
import ioc from "./ioc";
let appConfig: IAppConfig = {
    localization: {
        lang: LANG.EN,
        //files: [Locale.Common, Locale.Setting, Locale.Security]
        files: helperFacade.moduleHelper.getModuleLocales(modules)
    },
    localeUrl: "/src/resources/locales/",
    rootApi: "http://localhost:3000/api/",
    ioc: ioc,
    layout: DefaultLayout,
    routes: helperFacade.routeHelper.getModuleRoute(modules)
}
export default appConfig