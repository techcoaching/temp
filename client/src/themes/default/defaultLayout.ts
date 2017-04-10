import { Component } from "@angular/core";
import { AppMenuItem, BaseLayout } from "@app/common";
import helperFacade from "@app/common";

@Component({
    selector: "layout",
    templateUrl: "src/themes/default/defaultLayout.html"
})
export class DefaultLayout extends BaseLayout {
    public menuItems: Array<AppMenuItem> = [];
    protected onBeforeReady() {
        this.menuItems = helperFacade.appHelper.getConfig().menus;
        console.log("menus in layout:", this.menuItems);
    }
}