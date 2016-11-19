import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../pages/curtain/login/auth.service";
import {User} from "../../model/user.model";
import {LeftSidebarService} from "./leftSideBar.service";

@Component({
  selector: 'navigation',
  styleUrls: [
    './navigation.scss'
  ],
  templateUrl: './navigation.template.html'
})
export class NavigationComponent {
  private user: User;

  constructor(private authService: AuthService,
              public leftSidebarService: LeftSidebarService,
              private router: Router) {
    this.user = this.authService.getUser();
    this.authService.getObservableUser().subscribe((res:User) => {
      this.user = res;
    });
  }

  ngOnInit(){

  }

  logOut(){
    if (this.authService.logOut()) {
      this.router.navigate(['/login']);
    }
    return false; //to prevent reload page after navigate.
  }
}
