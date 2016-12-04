import {Component, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../pages/curtain/login/auth.service";
import {User} from "../../model/user.model";
import {LeftSidebarService} from "../leftSlideNav/leftSideBar.service";
import {NavigationService} from "./navigation.service";

@Component({
  selector: 'navigation',
  styleUrls: [
    './navigation.scss'
  ],
  templateUrl: './navigation.template.html'
})
export class NavigationComponent {

  constructor(public authService: AuthService,
              public leftSidebarService: LeftSidebarService,
              private router: Router) {
  }

  ngOnInit(){

  }
}
