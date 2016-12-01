/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, ViewChild, ViewContainerRef, ElementRef} from '@angular/core';

import { AppState } from './app.service';
import {LeftSidebarService} from "./components/navigation/leftSideBar.service";

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
    <!--<curtain></curtain>-->
    <navigation></navigation>
    <!--<custom-alert></custom-alert>-->
    
    <main class="main-container">
      <md-sidenav-layout class="left-bar">
      <!--(open)="closeStartButton.focus()"-->
         <md-sidenav #leftSidebar>
         <button md-button #closeStartButton (click)="leftSidebar.close()">Close</button>
          <a href="" class="nav-button">Home</a>
          <a href="" class="nav-button">Orders</a>
          <a href="" class="nav-button">Statistics</a>
          <a href="" class="nav-button">Log out</a>
        </md-sidenav>
      </md-sidenav-layout>
      <router-outlet></router-outlet>
    </main>
    <!--<modal-warning></modal-warning>-->
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  private viewContainerRef: ViewContainerRef;
  @ViewChild('leftSidebar') leftSideBarElement: ElementRef;

  constructor(public appState: AppState,
              viewContainerRef: ViewContainerRef,
              private leftSidebarService: LeftSidebarService) {
    this.viewContainerRef = viewContainerRef;
  }

  ngAfterViewInit() {
    this.leftSidebarService.element = this.leftSideBarElement; //component is set here doe to in constructor component isn't loaded.
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
