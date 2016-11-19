import {Injectable, ElementRef} from "@angular/core";

@Injectable()
export class LeftSidebarService {

  private _element: ElementRef;


  get element(): ElementRef {
    return this._element;
  }

  set element(value: ElementRef) {
    this._element = value;
  }
}
