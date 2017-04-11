import { BaseService, IConnector, IoCNames, Promise } from "@app/common";
import { ICustomerService } from "./icustomerService";
export class CustomerService extends BaseService implements ICustomerService {
    public getCustomers(): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get(this.resolve("customers"));
    }
}