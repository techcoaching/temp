import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SaleReport } from "./sale/saleReport";
import route from "./_share/config/route";
let routes: Routes = [
    { path: "", redirectTo: route.report.saleReport.path, pathMatch: "full" },
    { path: route.report.saleReport.path, component: SaleReport },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoute { }