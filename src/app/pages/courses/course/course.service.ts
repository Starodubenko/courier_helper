import {Injectable, Injector} from "@angular/core";
import {Observable} from "rxjs";
import {Response, URLSearchParams} from "@angular/http";
import {CourseList} from "../courseList.model";
import {Course} from "./course.model";
import {AbstractService, UserService} from "../../../services";

@Injectable()
export class CourseService extends AbstractService {

  constructor(private injector: Injector) {
    super(injector);
  };

  getCourse(id: number): Observable<Course | boolean> {
    let self = this;
    return this.get(`/api/course/${id}`)
      .map((data) => data ? self.getCourseFromJson(data) : data);
  }

  getList(filterParameter = "", page = 1, itemsPerPage = 3) {
    let searchParams = new URLSearchParams();
    searchParams.set("page", page.toString());
    searchParams.set("itemsPerPage", itemsPerPage.toString());
    searchParams.set("filter", filterParameter);

    return this.get("/api/courses", searchParams)
      .map((res: Response) => this.getCoursesListFromJson(res))
      .map((courseList: Course[]) => {
        let pageCount: number = Math.ceil(courseList.length / itemsPerPage);
        return new CourseList(courseList, pageCount);
      })
  }

  addCourse(data): Observable<number | boolean> {
    return this.post("/api/course", {data: data.data});
  }

  // removeCourse(id: number): Observable<boolean> {
  //   let self = this;
  //   return Observable.create(observer => {
  //     this.http.delete(self.getDomain() + "/api/course", {courseId: id})
  //       .subscribe((res: Response) => {
  //         observer.next(res.json())
  //       });
  //   })
  // }

  updateCourse(data) {
    return this.put("/api/course", {courseId: data.courseId, data: data.changes});
  }

  getCourseFromJson(json): Course {
    return new Course(
      +json.id,
      json.title,
      new Date(json.date),
      +json.duration,
      json.description,
      UserService.getUsersListFromJson(json.authors)
    );
  }

  getCoursesListFromJson(json): Course[] {
    let self = this;
    let result: Course[] = [];
    json.forEach(item => {
      result.push(self.getCourseFromJson(item))
    });
    return result;
  }
}
