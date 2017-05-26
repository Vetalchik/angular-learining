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
var hero_service_1 = require("./hero.service");
var AppComponent = (function () {
    function AppComponent(HeroService) {
        this.HeroService = HeroService;
        /*
          The constructor itself does nothing. The parameter simultaneously defines
          a private heroService property and identifies it as a HeroService injection
          site.
          Now Angular knows to supply an instance of the HeroService when it
          creates an AppComponent.
          The injector doesn't know yet how to create a HeroService.
          To teach the injector how to make a HeroService, add the following providers
          array property to the bottom of the component metadata in the @Component call.
        */
        this.title = 'Tour of heroes'; // властивість класу
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\"> \n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    <ul>\n    <hero-detail [hero]=\"selectedHero\"></hero-detail>\n  ",
        // [(ngModel)]="hero.name" - це two-way binding. Data flows in both directions
        // ngModel - valid Angular directive, isn't available by default
        // '*' префікс для ngFor вказує, що елемент <li> і його діти складають головний шаблон
        // The ngFor directive iterates over the component's heroes array and renders an instance of this template for each hero in that array.
        // The let hero part of the expression identifies hero as the template input variable, which holds the current hero item for each iteration. You can reference this variable within the template to access the current hero's properties.
        /*
            The parentheses identify the <li> element's click event as the target.
            The onSelect(hero) expression calls the AppComponent method, onSelect(),
            passing the template input variable hero, as an argument. That's the
            same hero variable you defined previously in the ngFor directive.
   
            When the expression (hero === selectedHero) is true, Angular adds the selected CSS class.
            When the expression is false, Angular removes the selected class.
            Як часто цей вираз перевіряєтся?
   
            !
            Putting square brackets around the hero property, to the left of the equal sign (=),
            makes it the target of a property binding expression. You must declare a
            target binding property to be an input property. Otherwise, Angular rejects
            the binding and throws an error.
   
            Coordinate the master AppComponent with the HeroDetailComponent by
            binding the selectedHero property of the AppComponent to the hero
            property of the HeroDetailComponent.
   
            Now every time the selectedHero changes, the HeroDetailComponent gets
            a new hero to display.
        */
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
        providers: [hero_service_1.HeroService],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], AppComponent);
exports.AppComponent = AppComponent;
/*
  You could create a new instance of the HeroService with new like this:
    heroService = new HeroService(); // don't do this
However, this option isn't ideal for the following reasons:
  - The component has to know how to create a HeroService. If you change the
  HeroService constructor, you must find and update every place you created
  the service. Patching code in multiple places is error prone and adds
  to the test burden.
  - You create a service each time you use new. What if the service caches heroes
  and shares that cache with others? You couldn't do that.
  - With the AppComponent locked into a specific implementation of the HeroService,
  switching implementations for different scenarios, such as operating offline
  or using different mocked versions for testing, would be difficult.

*/
//# sourceMappingURL=app.component.js.map