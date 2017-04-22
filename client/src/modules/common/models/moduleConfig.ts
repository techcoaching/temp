export class ModuleConfig {
    public name: string = String.empty;
    public ioc: Array<any> = [];
    public routes: Array<any> = [];
    public locale: string = "";
    public isLoadLocale: boolean = false;
    constructor(name: string, ioc: Array<any>, routes: Array<any> = []) {
        this.name = name;
        this.ioc = ioc;
        this.routes = routes;
    }
} 