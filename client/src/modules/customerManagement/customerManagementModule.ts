import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EJAngular2Module } from 'ej-angular2';
import { ModuleNames, AppCommon, BaseModule } from "@app/common";
import { CustomerManagementRoute } from "./customerManagementRoute";
import route from "./_share/config/route";
import { Customers } from "./customer/customers";
import { AddOrUpdateCustomer } from "./customer/addOrUpdateCustomer";
@NgModule({
    imports: [FormsModule, EJAngular2Module.forRoot(), AppCommon, CustomerManagementRoute],
    declarations: [Customers, AddOrUpdateCustomer],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerManagementModule extends BaseModule {
    constructor() {
        super(ModuleNames.CustomerManagement);
        this.registerModuleRoutes(route);
    }
}