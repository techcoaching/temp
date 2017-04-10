import { Router } from "@angular/router";
import { BaseComponent } from "./baseComponent";
import routerHelper from "../../helpers/routerHelper";
import { ComponentType } from "./enum";
export class BasePage<Model> extends BaseComponent {
    protected router: Router;
    protected model: Model;
    constructor(router: Router) {
        super(ComponentType.Page)
        this.router = router;
    }
    protected navigate(options: any) {
        let url: string = routerHelper.resolveUrl(options);
        this.router.navigate([url]);
    }
}