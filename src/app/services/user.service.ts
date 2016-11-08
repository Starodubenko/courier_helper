import {Injectable, Injector} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response, URLSearchParams} from "@angular/http";
import {User} from "../model/user.model";
import {AbstractService} from "./";

@Injectable()
export class UserService extends AbstractService{

  constructor(private injector: Injector) {
    super(injector);
  };

  getAuthorCandidates(): Observable<User[]> {
    return Observable.create(observer => {
      let getUrlRow = "/api/user";
      let searchParams: URLSearchParams = new URLSearchParams();
      searchParams.set("roles[]", "authorCandidate");
      this.get(getUrlRow, searchParams)
        .map((res: Response) => UserService.getUsersListFromJson(res))
        .subscribe((authorsList: User[]) => {
          observer.next(authorsList);
        });
    })
  }

  static getUserFromJson(json){
    return new User(
      +json.id,
      json.firstName,
      json.lastName,
      json.roles
    );
  }

  static getUsersListFromJson(json): User[] {
    let result: User[] = [];
    json.forEach(item => {
      result.push(UserService.getUserFromJson(item))
    });
    return result;
  }
}
