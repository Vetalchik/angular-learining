import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //імпорт модуля
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'; //Every component must be declared in one—and only one—Angular module.
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

/*
  Rather than require a real API server, this example simulates communication
  with the remote server by adding the InMemoryWebApiModule to the module 
  imports, effectively replacing the Http client's XHR backend service with
  an in-memory alternative.
*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    /*
      The forRoot() configuration method takes an InMemoryDataService class that
      primes the in-memory database.
    */
    // RouterModule.forRoot([
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent
    //   },{
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },{
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    //   },{
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //     /*
    //      The colon (:) in the path indicates that :id is a placeholder for a 
    //      specific hero id when navigating to the HeroDetailComponent.
    //     */
    //   }
    /*
      The forRoot() method is called because a configured router is provided
      at the app's root. The forRoot() method supplies the Router service 
      providers and directives needed for routing, and performs the initial
      navigation based on the current browser URL.

      The current RouterModule.forRoot() produces an Angular ModuleWithProviders,
      a class dedicated to routing should be a routing module
    */
    //])

  ], //включення модуля в програму
  /*
    The app will depend on the Angular http service, which itself depends on 
    other supporting services. The HttpModule from the @angular/http library
    holds providers for a complete set of HTTP services.
    To allow access to these services from anywhere in the app, add HttpModule
    to the imports list of the AppModule.
  */
  declarations: [ 
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent 
  ],
  bootstrap: [ 
    AppComponent
  ],
  providers: [
    HeroService
  ],
  /*
    Earlier, you removed the HeroService from the providers array
    of HeroesComponent and added it to the providers array of AppModule. 
    That move created a singleton HeroService instance, available to all
    components of the app. Angular injects HeroService and you can use it
    in the DashboardComponent.

    We recommend registering app-wide services in the root AppModule providers.
  */
})
export class AppModule { 

}
/*
  In general, the declarations array contains a list of application components,
  pipes, and directives that belong to the module. A component must be declared
  in a module before other components can reference it. This module declares
  only the two application components, AppComponent and HeroDetailComponent.

  The providers array tells Angular to create a fresh instance of the 
  HeroService when it creates an AppComponent. The AppComponent,
  as well as its child components, can use that service to get hero data.
*/



/*
  The Angular router is an external, optional Angular NgModule called RouterModule.
  The router is a combination of multiple provided services (RouterModule),
  multiple directives (RouterOutlet, RouterLink, RouterLinkActive),
  and a configuration (Routes). You'll configure the routes first.

  The Routes are an array of route definitions.


*/