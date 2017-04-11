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
let MainMenu = class MainMenu {
    constructor() {
        this.cls = "nav side-menu";
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], MainMenu.prototype, "cls", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], MainMenu.prototype, "items", void 0);
MainMenu = __decorate([
    core_1.Component({
        selector: "main-menu",
        templateUrl: "src/themes/default/components/mainMenu.html"
    }), 
    __metadata('design:paramtypes', [])
], MainMenu);
exports.MainMenu = MainMenu;
//# sourceMappingURL=mainMenu.js.map