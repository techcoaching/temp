"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const common_2 = require("@app/common");
const defaultLayout_1 = require("./defaultLayout");
const mainMenu_1 = require("./components/mainMenu");
let DefaultLayoutModule = class DefaultLayoutModule {
};
DefaultLayoutModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, common_2.AppCommon],
        declarations: [defaultLayout_1.DefaultLayout, mainMenu_1.MainMenu]
    }), 
    __metadata('design:paramtypes', [])
], DefaultLayoutModule);
exports.DefaultLayoutModule = DefaultLayoutModule;
//# sourceMappingURL=defaultLayoutModule.js.map