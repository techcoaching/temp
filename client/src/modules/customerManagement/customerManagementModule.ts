import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EJAngular2Module } from 'ej-angular2';
import { ModuleConfig, ModuleNames, AppCommon, BaseModule } from "@app/common";
import { CustomerManagementRoute } from "./customerManagementRoute";
import { Customers } from "./customer/customers";
import { AddOrUpdateCustomer } from "./customer/addOrUpdateCustomer";

import ioc from "./_share/config/ioc";
import routes from "./_share/config/route";
@NgModule({
    imports: [FormsModule, EJAngular2Module.forRoot(), AppCommon, CustomerManagementRoute],
    declarations: [Customers, AddOrUpdateCustomer],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerManagementModule extends BaseModule {
    constructor() {
        super(new ModuleConfig(ModuleNames.CustomerManagement, ioc, routes));
    }
}