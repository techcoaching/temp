import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IoCNames, AppCommon, IResourceManager } from "@app/common";
import helperFacade from "@app/common";
import appConfig from "./config/appConfig";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppCommon,
        appConfig.layout.module,
        RouterModule.forRoot(appConfig.routes)
    ],
    bootstrap: [appConfig.layout.component],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Application {
    constructor(ref: ApplicationRef) {
        helperFacade.appHelper.setConfig(appConfig);
        helperFacade.appHelper.setInjector(ref["_injector"]);
        let resourceManager: IResourceManager = window.ioc.resolve(IoCNames.IResource);
        resourceManager.load(appConfig.localization.files);
    }
}