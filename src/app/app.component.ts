import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
/*
  The Angular router provides a routerLinkActive directive you can use to add
  a class to the HTML navigation element whose route matches the active route.
  All you have to do is define the style for it.

  If you paste the path, /heroes, into the browser address bar at the end of
  the URL, the router should match it to the heroes route and display
  the HeroesComponent. However, you have to tell the router where to display 
  the component. To do this, you can add a <router-outlet> element at the end 
  of the template. RouterOutlet is one of the directives provided by the
  RouterModule. The router displays each component immediately below the
  <router-outlet> as users navigate through the app.

  Note the routerLink binding in the anchor tag. The RouterLink directive
  (another of the RouterModule directives) is bound to a string that tells
  the router where to navigate when the user clicks the link.
*/
export class AppComponent {
  title = 'Tour of heroes';
}