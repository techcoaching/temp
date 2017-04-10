import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { RouterModule } from "@angular/router";
import { ReflectiveInjector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModuleNames, AppCommon, BaseModule } from "@app/common";
import { SecurityRoute } from "./securityRoute";
import { UserSummary } from "./_share/components/userSummary";
import { RedColor } from "./_share/components/redColor";
import { Users } from "./user/users";
import { AddNewUser } from "./user/addNewUser";
import { EditUser } from "./user/editUser";
import routes from "./_share/config/route";

/*Permisison */
import { Permissions } from "./permission/permissions";
import { AddOrUpdatePermission } from "./permission/addOrUpdatePermission";

@NgModule({
    imports: [CommonModule, FormsModule, AppCommon, SecurityRoute],
    declarations: [AddOrUpdatePermission, Permissions, Users, AddNewUser, EditUser, UserSummary, RedColor],
    bootstrap: [Users],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule extends BaseModule {
    constructor() {
        super(ModuleNames.Security);
        this.registerModuleRoutes(routes);
    }
}