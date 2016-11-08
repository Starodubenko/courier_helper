export class User {

  constructor(
    private _id: number = 0,
    private _firstName: String = "",
    private _lastName: String = "",
    private _roles: string[] = []) {
    this._id = _id;
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._roles = _roles;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): String {
    return this._firstName;
  }

  set firstName(value: String) {
    this._firstName = value;
  }

  get lastName(): String {
    return this._lastName;
  }

  set lastName(value: String) {
    this._lastName = value;
  }


  get roles(): string[] {
    return this._roles;
  }

  set roles(value: string[]) {
    this._roles = value;
  }
}
