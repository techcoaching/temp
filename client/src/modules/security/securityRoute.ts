import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { DefaultPage } from "../../defaultPage";
import { Users } from "./user/users";
import { AddNewUser } from "./user/addNewUser";
import { EditUser } from "./user/editUser";
import { Permissions } from "./permission/permissions";
import { AddOrUpdatePermission } from "./permission/addOrUpdatePermission";
import routes from "./_share/config/route";

let routeConfigs: Routes = [
    { path: "", redirectTo: "users", pathMatch: "full" },
    { path: "users", component: Users },
    { path: "addNewUser", component: AddNewUser },
    { path: routes.user.editUser.path, component: EditUser },
    { path: routes.permission.permissions.path, component: Permissions },
    { path: routes.permission.addPermission.path, component: AddOrUpdatePermission }
];
@NgModule({
    imports: [RouterModule.forChild(routeConfigs)],
    exports: [RouterModule]
})
export class SecurityRoute { }