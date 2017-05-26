import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //імпорт модуля

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'; //Every component must be declared in one—and only one—Angular module.

@NgModule({
  imports:      [ BrowserModule, FormsModule ], //включення модуля в програму
  declarations: [ AppComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
/*
  In general, the declarations array contains a list of application components,
  pipes, and directives that belong to the module. A component must be declared
  in a module before other components can reference it. This module declares
  only the two application components, AppComponent and HeroDetailComponent.
*/
