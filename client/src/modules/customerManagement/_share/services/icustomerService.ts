import { Promise } from "@app/common";
export interface ICustomerService {
    getCustomers(): Promise;
    getCustomer(itemId: string): Promise;
    createCustomer(model: any): Promise;
    updateCustomer(model: any): Promise;
}