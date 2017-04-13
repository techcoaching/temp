import { IoCNames, IoCLifeCycle } from "@app/common";
import { UserService, PermissionService } from "@app/security";
let ioc = [
    { name: IoCNames.IPermissionService, instance: PermissionService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCNames.IUserService, instance: UserService, lifeCycle: IoCLifeCycle.Singleton },
];
export default ioc;