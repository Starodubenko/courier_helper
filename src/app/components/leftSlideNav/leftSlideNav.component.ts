import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {LeftSidebarService} from "./leftSideBar.service";
import {User} from "../../model/user.model";
import {AuthService} from "../../pages/curtain/login/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'left-slide-nav',
  styleUrls: [
    'leftSlideNav.scss'
  ],
  templateUrl: 'leftSlideNav.template.html',
})
export class LeftSlideNavComponent{
  private user: User;

  @ViewChild('leftSidebar') leftSideBarElement: ElementRef;

  constructor(private authService: AuthService,
              private router: Router,
              private leftSidebarService: LeftSidebarService) {
    this.user = this.authService.getUser();
    this.authService.getObservableUser().subscribe((res:User) => {
      this.user = res;
    });
  }

  ngAfterViewInit() {
    this.leftSidebarService.element = this.leftSideBarElement; //component is set here doe to in constructor component isn't loaded.
  }

  logOut(){
    if (this.authService.logOut()) {
      this.router.navigate(['/login']);
      this.leftSidebarService.toggle();
    }
    return false; //to prevent reload page after navigate.
  }
}
