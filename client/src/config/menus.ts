import { AppMenuItem } from "@app/common";
let menus: Array<AppMenuItem> = [
    new AppMenuItem("Security", "", "fa fa-home", [
        new AppMenuItem("Permissions", "/security/permissions")
    ]),
    new AppMenuItem("Setting", "", "fa fa-edit", [
        new AppMenuItem("ContentTypes", "/setting/contentTypes")
    ]),
    new AppMenuItem("Customer Management", "", "fa fa-desktop", [
        new AppMenuItem("Customer", "/customerManagement/customers")
    ]),
    new AppMenuItem("Dashboard", "", "fa fa-bar-chart-o", [
        new AppMenuItem("Sale Report", "/dashboard/report/saleReport")
    ]),
];
export default menus;