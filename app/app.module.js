"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var departments_component_1 = require("./components/departments.component");
var employees_component_1 = require("./components/employees.component");
var navigation_component_1 = require("./components/navigation.component");
var work_component_1 = require("./components/work.component");
var about_component_1 = require("./components/about.component");
var banner_component_1 = require("./components/banner.component");
var contact_component_1 = require("./components/contact.component");
var footer_component_1 = require("./components/footer.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', component: banner_component_1.Banner },
                { path: 'dept', component: departments_component_1.departments },
                { path: 'work', component: work_component_1.Work },
                { path: 'about', component: about_component_1.About },
                { path: 'banner', component: banner_component_1.Banner },
                { path: 'contact', component: contact_component_1.Contact },
            ])],
        declarations: [app_component_1.AppComponent, departments_component_1.departments, employees_component_1.employees, navigation_component_1.Navigation, work_component_1.Work, about_component_1.About, banner_component_1.Banner, contact_component_1.Contact, footer_component_1.Footer],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map