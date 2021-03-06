"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); //імпорт модуля
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./hero-detail.component"); //Every component must be declared in one—and only one—Angular module.
var heroes_component_1 = require("./heroes.component");
var hero_service_1 = require("./hero.service");
var dashboard_component_1 = require("./dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
/*
  Rather than require a real API server, this example simulates communication
  with the remote server by adding the InMemoryWebApiModule to the module
  imports, effectively replacing the Http client's XHR backend service with
  an in-memory alternative.
*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
        ],
        /*
          The app will depend on the Angular http service, which itself depends on
          other supporting services. The HttpModule from the @angular/http library
          holds providers for a complete set of HTTP services.
          To allow access to these services from anywhere in the app, add HttpModule
          to the imports list of the AppModule.
        */
        declarations: [
            app_component_1.AppComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            dashboard_component_1.DashboardComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            hero_service_1.HeroService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
/*
  In general, the declarations array contains a list of application components,
  pipes, and directives that belong to the module. A component must be declared
  in a module before other components can reference it. This module declares
  only the two application components, AppComponent and HeroDetailComponent.

  The providers array tells Angular to create a fresh instance of the
  HeroService when it creates an AppComponent. The AppComponent,
  as well as its child components, can use that service to get hero data.
*/
/*
  The Angular router is an external, optional Angular NgModule called RouterModule.
  The router is a combination of multiple provided services (RouterModule),
  multiple directives (RouterOutlet, RouterLink, RouterLinkActive),
  and a configuration (Routes). You'll configure the routes first.

  The Routes are an array of route definitions.


*/ 
//# sourceMappingURL=app.module.js.map