import { IRouteService } from "./services/irouteService";
import { IoCNames } from "./ioc/enum";
export class BaseModule {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    protected registerModuleRoutes(route: any) {
        let routeService: IRouteService = window.ioc.resolve(IoCNames.IRouteService);
        routeService.registerModuleRouteConfig(this.name, route);
    }
}