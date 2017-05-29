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

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
      return Promise.resolve(HEROES);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
        // Simulate server latency with 2 seconds delay
        setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
  }
}

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