import {Course} from "./course/course.model";
export class CourseList {

  constructor(private _courses: Course[], private _pageCount: number){
    this._courses = _courses;
    this._pageCount = _pageCount
  }

  get courses(): Course[] {
    return this._courses;
  }

  set courses(value: Course[]) {
    this._courses = value;
  }

  get pageCount(): number {
    return this._pageCount;
  }

  set pageCount(value: number) {
    this._pageCount = value;
  }
}
