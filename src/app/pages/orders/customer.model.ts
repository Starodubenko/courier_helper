
export class Customer{
  private _name: string = "";
  private _middlename: string = "";
  private _surname: string = "";
  private _address: string = "";


  constructor(name?: string, middlename?: string, surname?: string, address?: string) {
    this._name = name;
    this._middlename = middlename;
    this._surname = surname;
    this._address = address;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get fullname(): string {
    return this._name + " "+ this._surname;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get middlename(): string {
    return this._middlename;
  }

  set middlename(value: string) {
    this._middlename = value;
  }

  toString(){
    return "{" + this.name + ", " + this.surname + ", " + this.address + "}";
  }
}
