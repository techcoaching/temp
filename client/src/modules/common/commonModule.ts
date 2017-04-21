import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
/*Page*/
import { Page } from "./components/page/page";
import { PageActions } from "./components/page/pageActions";
/*Form*/
import { HorizontalForm } from "./components/form/horizontalForm";
import { FormPrimaryButton } from "./components/form/formPrimaryButton";
import { FormDefaultButton } from "./components/form/formDefaultButton";
import { FormButton } from "./components/form/formButton";
import { FormInput } from "./components/form/formInput";
import { FormTextInput } from "./components/form/formTextInput";
import { FormTextArea } from "./components/form/formTextArea";
import { Validation } from "./components/validation";
/*Common*/
import { Style } from "./components/style";
import { Script } from "./components/script";

/*Grid*/
import { Grid } from "./components/grid/grid";

import { BaseModule } from "./baseModule";
import { ModuleNames } from "./enum";
import { ModuleConfig } from "./models/moduleConfig";

import ioc from "./ioc/iocConfig";

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, RouterModule],
    declarations: [FormButton, FormTextArea, Validation, Page, HorizontalForm, FormPrimaryButton, FormInput, FormDefaultButton, FormTextInput, Style, Script, Grid, PageActions],
    exports: [FormTextArea, Validation, FormsModule, HttpModule, RouterModule, Page, HorizontalForm, FormPrimaryButton, FormDefaultButton, FormInput, Style, Script, Grid, PageActions, FormTextInput],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppCommon extends BaseModule {
    constructor() {
        super(new ModuleConfig(ModuleNames.Security, ioc));
    }
}