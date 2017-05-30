import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({ // декоратор
  selector: 'my-heroes',
  templateUrl: './heroes.component.html', 
  styleUrls: [ './heroes.component.css' ],
    /*
      The styleUrls property is an array of style file names (with paths). You
      could list multiple style files from different locations if you needed them.

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

  constructor(private heroService: HeroService, private router: Router) {}
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
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
