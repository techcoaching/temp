import { HelperFacade } from "./models/helperFacade";
export * from "./commonModule";
export * from "./ioc/enum";
export * from "./connectors/httpConnector";
export * from "./connectors/iconnector";
export * from "./models/promise";
export * from "./models/ui";
export * from "./application/iappConfig";
export * from "./enum";
export * from "./baseModule";
export * from "./models/baseModel";

export * from "./services/logger/consoleLogger";
export * from "./services/baseService";
export * from "./services/cache/cacheService";
export * from "./services/routeService";

export * from "./exception";

export * from "./resourceManager";
export * from "./iresourceManager";
export * from "./event/eventManager";
import iocHelper from "./ioc/iocHelper";
import appHelper from "./application/appHelper";
import routerHelper from "./helpers/routerHelper";
import domHelper from "./helpers/domHelper";
import moduleHelper from "./helpers/moduleHelper";

let helperFacade: HelperFacade = new HelperFacade();
helperFacade.iocHelper = iocHelper;
helperFacade.appHelper = appHelper;
helperFacade.routeHelper = routerHelper;
helperFacade.domHelper = domHelper;
helperFacade.moduleHelper = moduleHelper;
export default helperFacade;
