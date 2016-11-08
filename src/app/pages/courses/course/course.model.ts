import {User} from "../../../model/user.model";
export class Course {

  constructor(private _id: number = null,
              private _title: string = "",
              private _date: Date = new Date(),
              private _duration: number = 0,
              private _description: string = "",
              private _authors: User[] = []) {
    this._title = _title;
    this._date = _date;
    this._duration = _duration;
    this._description = _description;
    this._authors = _authors;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get authors(): User[] {
    return this._authors;
  }

  set authors(value: User[]) {
    this._authors = value;
  }
}
