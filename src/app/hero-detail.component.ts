/*
    The component class name should be written in upper camel case and end in the word
    "Component". The hero detail component class is HeroDetailComponent.

    The component file name should be spelled in lower dash case, each word separated
    by dashes, and end in .component.ts. The HeroDetailComponent class goes in the 
    hero-detail.component.ts file.
*/
import { Component, Input, OnInit } from '@angular/core'; // Component - це символ, який ми завжди повинні імпортувати, щоб визначити комонент
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({ // @Component декоратор забезпечує Angular метаданими для компонента
    selector: 'hero-detail', // CSS selector name, hero-detail, will match the element tag that identifies this component within a parent component's template.
    templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit { // Always export the component class because you'll always import it elsewhere.
    @Input() hero: Hero;
    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => 
            this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
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

    }
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

    /*
        goBack() method that navigates backward one step in the browser's history 
        stack using the Location service you injected previously.
    */
}

/*
    You'll no longer receive the hero in a parent component property binding.
    The new HeroDetailComponent should take the id parameter from the
    params Observable in the ActivatedRoute service and use the HeroService 
    to fetch the hero with that id.
*/
