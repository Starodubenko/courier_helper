
import {CustomerOrder} from "./order.model";

export class OrdersList {

  constructor(private _orders: CustomerOrder[], private _pageCount: number){
    this._orders = _orders;
    this._pageCount = _pageCount
  }

  get courses(): CustomerOrder[] {
    return this._orders;
  }

  set courses(value: CustomerOrder[]) {
    this._orders = value;
  }

  get pageCount(): number {
    return this._pageCount;
  }

  set pageCount(value: number) {
    this._pageCount = value;
  }
}
