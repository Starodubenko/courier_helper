/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, ViewChild, ViewContainerRef, ElementRef} from '@angular/core';

import { AppState } from './app.service';
import {LeftSidebarService} from "./components/leftSlideNav/leftSideBar.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.style.scss'
  ],
  template: `
    <left-slide-nav></left-slide-nav>   
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  private viewContainerRef: ViewContainerRef;

  constructor(public appState: AppState,
              viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
