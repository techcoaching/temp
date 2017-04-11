import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Customers } from "./customer/customers";
import {AddOrUpdateCustomer} from "./customer/addOrUpdateCustomer";
import route from "./_share/config/route";

let routeConfigs: Routes = [
    { path: "", redirectTo: route.customer.customers.path, pathMatch: "full" },
    { path: route.customer.customers.path, component: Customers },
    { path: route.customer.addCustomer.path, component: AddOrUpdateCustomer }
];

@NgModule({
    imports: [RouterModule.forChild(routeConfigs)],
    exports: [RouterModule],

})
export class CustomerManagementRoute { }