import {CanActivate, Router, RouterState, ActivatedRouteSnapshot, RouterStateSnapshot,} from "@angular/router";
import { AuthService } from "../pages/curtain/login/auth.service";
import { Injectable } from "@angular/core";
import {NavigationService} from "../components/navigation/navigation.service";

@Injectable()
export class AnimationGuard implements CanActivate {
  constructor(private navigationService: NavigationService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let targetState = state.url;

    this.navigationService.calculateStates(route.url[0].path);

    return true;
  }
}
