import { IoCNames, BaseService, IConnector, PromiseFactory, Promise } from "@app/common";
import { IUserService } from "./iuserService";
export class UserService extends BaseService implements IUserService {
    private iconnector: IConnector;
    public getUsers(): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get(this.resolve("users.json"));
    }
    public createUser(user: any): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.post("/users", user);
    }
}