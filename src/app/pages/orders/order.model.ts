import {Customer} from "./customer.model";
import {Goods} from "./goods.model";

export class CustomerOrder{
  private _number: number = null;
  private _customer: Customer;
  private _goods: Map<Goods, number>;

  constructor(number?: number, customer: Customer = new Customer(), goods: Map<Goods,number> = new Map()){
    this._number = number;
    this._customer = customer;
    this._goods = goods;
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

  get goods(): Map<Goods, number> {
    return this._goods;
  }

  set goods(value: Map<Goods, number>) {
    this._goods = value;
  }

  getTotalSum(){
    let summ = 0;
    this.goods.forEach((value: number, key: Goods) => {
      summ+= key.price * value;
    });
    return summ;
  }

  getGoodsKeys(){
    let keys = [];
    this.goods.forEach((value: number, key: Goods) => {
      keys.push(key);
    });
    return keys;
  }

  toString(){
    return "{" + this.number + ", " + this.customer.toString() + ", " + this.goods.toString() + "}"
  }
}
