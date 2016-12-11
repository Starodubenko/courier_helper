import {Customer} from "./customer.model";

export class CustomerOrder{
  private _number: number;
  private _customer: Customer;


  constructor(number: number = null, customer: Customer = null) {
    this._number = number;
    this._customer = customer;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  toString(){
    return "{" + this.number + ", " + this.customer.toString() + "}"
  }
}
