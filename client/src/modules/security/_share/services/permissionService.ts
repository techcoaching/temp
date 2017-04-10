import { IoCNames, BaseService, Promise, IConnector } from "@app/common";
import { IPermissionService } from "./ipermissionService";
export class PermissionService extends BaseService implements IPermissionService {
    public getPermissions(): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get(this.resolve("permissions.json"));
    }

    public getPermission(itemId: string): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url = String.format("permission_{0}.json", itemId);
        return iconnector.get(this.resolve(url));
    }

    public updatePermission(model: any): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url = "permission_0.json";
        return iconnector.put(this.resolve(url), model);
    }

    public createPermission(model: any): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url = "permission_0.json";
        return iconnector.post(this.resolve(url), model);
    }
}