import { ModuleNames } from "@app/common";
let modules: Array<any> = [
    { name: ModuleNames.Security, urlPrefix: ModuleNames.Security, path: ModuleNames.Security },
    { name: ModuleNames.Setting, urlPrefix: ModuleNames.Setting, path: ModuleNames.Setting },
    { name: ModuleNames.CustomerManagement, urlPrefix: ModuleNames.CustomerManagement, path: ModuleNames.CustomerManagement }
];
export default modules;