import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class CustomAlertService {

  private observer;
  private observable: Observable<any> = Observable.create(observer => {
    this.observer = observer;
  });

  listenService(): Observable<any> {
    return this.observable;
  }

  public addAlert(alert):void {
    this.observer.next(alert);
  }
}
