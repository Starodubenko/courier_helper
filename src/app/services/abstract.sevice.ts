import {CustomAlertService} from "../components/alert";
import {Http, Response, Request, RequestOptions, URLSearchParams, Headers, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {Injector, Inject} from "@angular/core";

export class AbstractService {

  protected http: Http;
  protected customAlertService: CustomAlertService;
  private domain = "";

  constructor(@Inject(Injector) private _injector: Injector) {
    this.http = _injector.get(Http);
    this.customAlertService = _injector.get(CustomAlertService);
    if ('production' === ENV) {
      this.domain = 'http://angular2mentoring-89997.onmodulus.net';
    } else {
      this.domain = 'http://localhost:8080';
    }
  }

  private getDomain() {
    return this.domain;
  }

  private setSuccess(successMessage: string) {
    this.customAlertService.addAlert({
      type: "success",
      msg: successMessage,
      closable: true
    });
  }

  private setError(errorResponse: Response) {
    let message;
    if (errorResponse.status == 0) {
      message = "The server is not responding.";
    } else {
      try {
        message = errorResponse.json().message;
      } catch (e) {
        message = errorResponse.statusText;
      }
    }

    this.customAlertService.addAlert({
      type: "danger",
      msg: message,
      closable: true
    });
  }

  get(url, urlParams?: URLSearchParams): Observable<any> {
    let request: Request;
    let requestOptions: RequestOptions = this.createRequestOptions(url, RequestMethod.Get, null, urlParams);

    request = new Request(requestOptions);
    return this.universalHandler(request);
  }

  post(url, data): Observable<any> {
    let request: Request;
    let requestOptions: RequestOptions = this.createRequestOptions(url, RequestMethod.Post, data);

    request = new Request(requestOptions);
    return this.universalHandler(request);
  }

  put(url, data): Observable<any> {
    let request: Request;
    let requestOptions: RequestOptions = this.createRequestOptions(url, RequestMethod.Put, data);

    request = new Request(requestOptions);
    return this.universalHandler(request);
  }

  delete(url, data): Observable<any> {
    let request: Request;
    let requestOptions: RequestOptions = this.createRequestOptions(url, RequestMethod.Delete, data);

    request = new Request(requestOptions);
    return this.universalHandler(request);
  }

  private createRequestOptions(url, method, data?, search?): RequestOptions{
    let requestOptions: RequestOptions = new RequestOptions();
    let headers: Headers = new Headers();

    requestOptions.url = this.getDomain() + url;
    requestOptions.headers = headers;
    requestOptions.method = method;
    if (data){
      requestOptions.body = data;
    } else if (search){
      requestOptions.search = search;
    }

    return requestOptions;
  }

  universalHandler(request: Request): Observable<any> {
    let self = this;
    return Observable.create(observer => {
      self.http.request(request)
        .subscribe(
          (res: Response) => {
            let convertedInJson = res.json();
            if (convertedInJson.message) {
              self.setSuccess(convertedInJson.message);
            }
            observer.next(convertedInJson.data);
          },
          (error: Response) => {
            self.setError(error);
            observer.next(false);
          }
        );
    })
  }
}
