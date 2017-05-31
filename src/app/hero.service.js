/*
    The naming convention for service files is the service name in lowercase
    followed by .service. For a multi-word service name, use lower dash-case.
    For example, the filename for SpecialSuperHeroService is
    special-super-hero.service.ts.

    The @Injectable() decorator tells TypeScript to emit metadata about
    the service. The metadata specifies that Angular may need to inject
    other dependencies into this service.
    Although the HeroService doesn't have any dependencies at the moment,
    applying the @Injectable() decorator ​from the start ensures consistency
    and future-proofing.
*/
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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; //URL to web api
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /*
      The Angular http.get returns an RxJS Observable. Observables are a powerful
      way to manage asynchronous data flows.
      For now, you've converted the Observable to a Promise using the toPromise
      operator.
      The Angular Observable doesn't have a toPromise operator out of the box.
      There are many operators like toPromise that extend Observable with useful
      capabilities. To use those capabilities, you have to add the operators
      themselves. That's as easy as importing them from the RxJS library like this:
      import 'rxjs/add/operator/toPromise';
    */
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 seconds delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occured', error); //for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
/*
    The HeroService returns a list of mock heroes immediately; its getHeroes()
    signature is synchronous.
    Eventually, the hero data will come from a remote server. When using a
    remote server, users don't have to wait for the server to respond;
    additionally, you aren't able to block the UI during the wait.
    To coordinate the view with the response, you can use Promises, which is an
    asynchronous technique that changes the signature of the getHeroes() method.

    A Promise essentially promises to call back when the results are ready.
    You ask an asynchronous service to do some work and give it a callback
    function. The service does that work and eventually calls the function with
    the results or an error.
*/ 
//# sourceMappingURL=hero.service.js.map