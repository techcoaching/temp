import { IoCNames, IoCLifeCycle} from "@app/common";
import { CustomerService } from "@app/customerManagement";
let ioc = [
    { name: IoCNames.ICustomerService, instance: CustomerService, lifeCycle: IoCLifeCycle.Singleton },
];
export default ioc;