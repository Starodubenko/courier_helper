/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, ViewChild, ViewContainerRef, ElementRef} from '@angular/core';

import { AppState } from './app.service';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.style.scss',
    '../../node_modules/font-awesome/scss/font-awesome.scss',
    '../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../node_modules/primeng/resources/primeng.min.css',
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
