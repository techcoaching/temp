import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { BasePage, PageAction, IoCNames } from "@app/common";
import { CustomersModel } from "./customersModel";
import { ICustomerService } from "../_share/services/icustomerService";
import route from "../_share/config/route";
@Component({
    templateUrl: "src/modules/customerManagement/customer/customers.html"
})
export class Customers extends BasePage<CustomersModel> {
    constructor(router: Router) {
        super();
        let self = this;
        self.model = new CustomersModel();
        self.load();
        this.model.addPageAction(new PageAction("customerManagement.customers.addNewAction", () => { self.onAddNewItemClicked(); }));
    }
    private onAddNewItemClicked() {
        this.navigate(route.customer.addCustomer.name);
    }
    private load(): void {
        let self = this;
        let customerService: ICustomerService = window.ioc.resolve(IoCNames.ICustomerService);
        customerService.getCustomers().then(function (items: Array<any>) {
            self.model.import(items);
        });
    }
}