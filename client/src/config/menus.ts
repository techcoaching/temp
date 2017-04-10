import { AppMenuItem } from "@app/common";
let menus: Array<AppMenuItem> = [
    new AppMenuItem("Security", "", "icon-module-security", [
        new AppMenuItem("Users", "/security/users"),
        new AppMenuItem("Add new user", "/security/addNewUser"),
        new AppMenuItem("Permissions", "/security/permissions")
    ]),
    new AppMenuItem("Setting", "", "icon-module-setting", [
        new AppMenuItem("ContentTypes", "/setting/contentTypes")
    ]),
];
export default menus;