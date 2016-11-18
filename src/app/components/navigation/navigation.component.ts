import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../pages/curtain/login/auth.service";
import {User} from "../../model/user.model";

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
  }
}
