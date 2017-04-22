import { ModuleNames, IModuleConfigItem } from "@app/common";
let modules: Array<IModuleConfigItem> = [
    { name: ModuleNames.Security, urlPrefix: ModuleNames.Security, path: ModuleNames.Security },
    { name: ModuleNames.Setting, urlPrefix: ModuleNames.Setting, path: ModuleNames.Setting }
];
export default modules;