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
/*
    The component class name should be written in upper camel case and end in the word
    "Component". The hero detail component class is HeroDetailComponent.

    The component file name should be spelled in lower dash case, each word separated
    by dashes, and end in .component.ts. The HeroDetailComponent class goes in the
    hero-detail.component.ts file.
*/
var core_1 = require("@angular/core"); // Component - це символ, який ми завжди повинні імпортувати, щоб визначити комонент
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var hero_service_1 = require("./hero.service");
var hero_1 = require("./hero");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.heroService.getHero(+params['id']);
        })
            .subscribe(function (hero) { return _this.hero = hero; });
        /*
           The switchMap operator maps the id in the Observable route parameters
           to a new Observable, the result of the HeroService.getHero() method.

           If a user re-navigates to this component while a getHero request is
           still processing, switchMap cancels the old request and then calls
           HeroService.getHero() again.

           The hero id is a number. Route parameters are always strings. So the
           route parameter value is converted to a number with the
           JavaScript (+) operator.
        */
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.component.html',
        styleUrls: ['./hero-detail.component.css'],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
/*
    You'll no longer receive the hero in a parent component property binding.
    The new HeroDetailComponent should take the id parameter from the
    params Observable in the ActivatedRoute service and use the HeroService
    to fetch the hero with that id.
*/
//# sourceMappingURL=hero-detail.component.js.map