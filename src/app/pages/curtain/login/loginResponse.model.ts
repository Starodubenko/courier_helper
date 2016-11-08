export class LoginResponse {
  constructor(private _message: string =  ""){
    this._message = _message;
  }

  public get message(): string {
    return this._message;
  }

  public set message(value: string) {
    this._message = value;
  }
}
