import { Injectable } from '@angular/core';

export type InteralStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  private _state: string;

  constructor() {

  }


  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}
