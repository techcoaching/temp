import { IoCNames, IoCLifeCycle, HttpConnector, ConsoleLogger, EventManager, ResourceManager, CacheService, RouteService } from "@app/common";
import { SettingService } from "@app/setting";
import { UserService, PermissionService } from "@app/security";

let ioc = [
    /* Common config */
    { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.ILogger, instance: ConsoleLogger, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IEventManager, instance: EventManager, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IResource, instance: ResourceManager, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.ICacheService, instance: CacheService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IRouteService, instance: RouteService, lifeCycle: IoCLifeCycle.Singleton },
    /* Security config */
    { name: IoCNames.IPermissionService, instance: PermissionService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IUserService, instance: UserService, lifeCycle: IoCLifeCycle.Singleton },
    /* Setting config */
    { name: IoCNames.ISettingService, instance: SettingService, lifeCycle: IoCLifeCycle.Singleton },
];
export default ioc;