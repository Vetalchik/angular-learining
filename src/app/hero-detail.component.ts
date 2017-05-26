/*
    The component class name should be written in upper camel case and end in the word
    "Component". The hero detail component class is HeroDetailComponent.

    The component file name should be spelled in lower dash case, each word separated
    by dashes, and end in .component.ts. The HeroDetailComponent class goes in the 
    hero-detail.component.ts file.
*/
import { Component, Input } from '@angular/core'; // Component - це символ, який ми завжди повинні імпортувати, щоб визначити комонент
import { Hero } from './hero';

@Component({ // @Component декоратор забезпечує Angular метаданими для компонента
    selector: 'hero-detail', // CSS selector name, hero-detail, will match the element tag that identifies this component within a parent component's template.
    template: `
        <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"> 
        </div>
        </div>
    `,
})

export class HeroDetailComponent { // Always export the component class because you'll always import it elsewhere.
    @Input() hero: Hero;
}

