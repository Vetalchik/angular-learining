import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({ // декоратор
  selector: 'my-heroes',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)"> 
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    <ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `, // interpolation bindings представляють значення властивостей title, hero компонента
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
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    /*
      When you assign styles to a component, they are scoped to that specific component.
      These styles apply only to the AppComponent and don't affect the outer HTML.
    
      The app now displays a list of heroes as well as a single hero in the details view.
      But the list and the details view are not connected. When users select a hero from
      the list, the selected hero should appear in the details view. This UI pattern is
      known as "master/detail." In this case, the master is the heroes list and the
      detail is the selected hero.

    */

})
export class HeroesComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }
  /*
    To have Angular call getHeroes(), you can implement the Angular ngOnInit 
    lifecycle hook. Angular offers interfaces for tapping into critical moments
    in the component lifecycle: at creation, after each change, and at its 
    eventual destruction.
    Each interface has a single method. When the component implements that 
    method, Angular calls it at the appropriate time.
  */

  constructor(private heroService: HeroService) {}
  /*
    The constructor itself does nothing. The parameter simultaneously defines
    a private heroService property and identifies it as a HeroService injection
    site.
    Now Angular knows to supply an instance of the HeroService when it
    creates an AppComponent.
    The injector doesn't know yet how to create a HeroService. 
    To teach the injector how to make a HeroService, add the following providers
    array property to the bottom of the component metadata in the @Component call.

    You might be tempted to call the getHeroes() method in a constructor, but a 
    constructor should not contain complex logic, especially a constructor that 
    calls a server, such as as a data access method. The constructor is for 
    simple initializations, like wiring constructor parameters to properties.
  */

  heroes: Hero[]; // heroes не типізований параметр, тому що TypeScript виводить тип з масиву HEROES ... виводив колись :)
  selectedHero: Hero; // властивість типу Hero
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  /*
    As a result of the change to HeroService, this.heroes is now set to a Promise
     rather than an array of heroes.
  */
}

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
