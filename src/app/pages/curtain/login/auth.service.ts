import {Injectable, Injector} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginResponse} from "./loginResponse.model";
import {User} from "../../../model/user.model";
import {Subject} from 'rxjs/Subject';
import {AbstractService, UserService} from "../../../services";
let decode = require('jwt-decode');


@Injectable()
export class AuthService extends AbstractService{
  private _userSource = new Subject<User>();
  private user = this._userSource.asObservable();

  constructor(private injector: Injector) {
    super(injector);
    this._userSource.next(this.getUser());
  }

  logIn(username: string, password: string): Observable<LoginResponse> {
    let self = this;
    return Observable.create(observer => {
      let getUrlRow = "/api/authenticate";
      self.post(getUrlRow, {data: {username: username, password: password}})
        .subscribe(resJson => {
          if (resJson.token){
            localStorage.setItem('user_token', resJson.token);
            this._userSource.next(this.getUser());
          }
          observer.next(new LoginResponse(resJson.message))
        });
    })
  }

  isLoggedIn() {
    return !!localStorage.getItem('user_token');
  }

  getUser() {
    return localStorage.getItem('user_token') ? UserService.getUserFromJson(decode(localStorage.getItem('user_token'))) : null;
  }

  getObservableUser() {
    return this.user;
  }

  logOut() {
    localStorage.removeItem('user_token');
    this._userSource.next(null);
    return !this.isLoggedIn();
  }
}
