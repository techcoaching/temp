import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppCommon, BaseModule, ModuleConfig, ModuleNames } from "@app/common";
import { DashboardRoute } from "./dashboardRoute";
import { SaleReport } from "./sale/saleReport";
@NgModule({
    imports: [CommonModule, FormsModule, AppCommon, DashboardRoute],
    exports: [],
    declarations: [SaleReport],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule extends BaseModule {
    constructor() {
        super(new ModuleConfig(ModuleNames.Dashboard, []));
    }
}