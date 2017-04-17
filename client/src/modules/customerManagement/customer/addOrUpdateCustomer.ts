import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { BasePage, FormMode, IoCNames } from "@app/common";
import { AddOrUpdateCustomerModel } from "./addOrUpdateCustomerModel";
import { ICustomerService } from "@app/customerManagement";
import route from "../_share/config/route";

@Component({
    templateUrl: "src/modules/customerManagement/customer/addOrUpdateCustomer.html"
})
export class AddOrUpdateCustomer extends BasePage<AddOrUpdateCustomerModel> {
    private mode: FormMode = FormMode.AddNew;
    private itemId: any;
    constructor(router: Router, activatedRoute: ActivatedRoute) {
        super();
        let self = this;
        self.model = new AddOrUpdateCustomerModel();
        if (!!activatedRoute.params["value"].id) {
            self.mode = FormMode.Edit;
            self.itemId = activatedRoute.params["value"].id;
            let customerService: ICustomerService = window.ioc.resolve(IoCNames.ICustomerService);
            customerService.getCustomer(self.itemId).then(function (item: any) {
                self.model.import(item);
            });
        }
    }
    public onSaveClicked(event: any): void {
        let self = this;
        let customerService: ICustomerService = window.ioc.resolve(IoCNames.ICustomerService);
        if (!this.model.validated()) { return; }
        if (self.mode === FormMode.AddNew) {
            customerService.createCustomer(this.model).then(function () {
                self.navigate(route.customer.customers.name);
            });
            return;
        }
        customerService.updateCustomer(this.model).then(function () {
            self.navigate(route.customer.customers.name);
        });
    }
    public onCancelClicked(event: any): void {
        let self = this;
        self.navigate(route.customer.customers.name);
    }
}