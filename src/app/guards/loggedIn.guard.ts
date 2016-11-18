import {CanActivate, Router, RouterState, ActivatedRouteSnapshot, RouterStateSnapshot,} from "@angular/router";
import { AuthService } from "../pages/curtain/login/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // let isLoggedIn = this.authService.isLoggedIn();
    // let targetState = state.url;
    // let result = true;
    //
    // if (targetState == '/login' && isLoggedIn){
    //   result = false;
    //   if (this.router.routerState.snapshot.url != "/courses-list"){
    //     history.back(-1)
    //   }
    // } else
    //   if (targetState != '/login' && !isLoggedIn){
    //   this.router.navigate(['/login']);
    // }
    // return result;
    return true;
  }
}
