import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Course} from "../../pages/courses/course/course.model";
import {Http} from "@angular/http";
import {User} from "../../model/user.model";

@Injectable()
export class ModalWarningService {

  private observer;
  private observable: Observable<any> = Observable.create(observer => {
    this.observer = observer;
  });

  constructor() {

  };

  listenService(): Observable<any> {
    return this.observable;
  }

  showWarning(title: string, content: string, yesAction, noAction = null) {
    this.observer.next({title: title, content: content, yesAction: yesAction, noAction: noAction});
  }
}
