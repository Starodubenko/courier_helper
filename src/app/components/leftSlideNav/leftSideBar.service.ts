import {Injectable, ElementRef} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class LeftSidebarService {

  private _element;
  private _isOpened: boolean = false;

  constructor(){

  }

  toggle(){
    this._element.toggle();
  }

  get element(): ElementRef {
    return this._element;
  }

  set element(value: ElementRef) {
    this._element = value;

  }

  get isOpened(): boolean {
    return this._isOpened;
  }

  set isOpened(value: boolean) {
    this._isOpened = value;
  }
}
