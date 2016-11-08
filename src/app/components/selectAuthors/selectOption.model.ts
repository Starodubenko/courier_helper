export class SelectOption {
  constructor(private _id: number, private _value: String) {
    this._id = _id;
    this._value = _value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get value(): String {
    return this._value;
  }

  set value(value: String) {
    this._value = value;
  }
}
