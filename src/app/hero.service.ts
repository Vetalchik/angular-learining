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
  getHeroes(): Hero[] {
      return HEROES;
  } // stub
}