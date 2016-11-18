/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import {AppState} from "./app.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <!--<curtain></curtain>-->
    <navigation></navigation>
    <!--<custom-alert></custom-alert>-->
    
    <main class="main-container">
      <router-outlet></router-outlet>
    </main>
    <!--<modal-warning></modal-warning>-->
  `,
})
export class App {

  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
  }

}
