import { BaseService, IConnector, IoCNames, Promise } from "@app/common";
import { ICustomerService } from "./icustomerService";
export class CustomerService extends BaseService implements ICustomerService {
    public getCustomers(): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        return iconnector.get(this.resolve("customers"));
    }
    public getCustomer(id: string): Promise {
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url = String.format("customers/{0}", id);
        return iconnector.get(this.resolve(url));
    }

    public createCustomer(model: any): Promise {
        console.log(model)
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url = "customers";
        return iconnector.post(this.resolve(url), model);
    }

    public updateCustomer(model: any): Promise {
        console.log(model);
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url = "customers";
        return iconnector.put(this.resolve(url), model);
    }
}