System.register(["@angular/core", "@app/common"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, common_2, DefaultLayout;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }
        ],
        execute: function () {
            DefaultLayout = class DefaultLayout extends common_1.BaseLayout {
                constructor() {
                    super(...arguments);
                    this.menuItems = [];
                }
                onBeforeReady() {
                    console.log(common_2.default.appHelper.getConfig().getMainMenus);
                    this.menuItems = common_2.default.appHelper.getConfig().menus;
                    console.log("menus in layout:", this.menuItems);
                }
            };
            DefaultLayout = __decorate([
                core_1.Component({
                    selector: "layout",
                    templateUrl: "src/themes/default/defaultLayout.html"
                })
            ], DefaultLayout);
            exports_1("DefaultLayout", DefaultLayout);
        }
    };
});
//# sourceMappingURL=defaultLayout.js.map