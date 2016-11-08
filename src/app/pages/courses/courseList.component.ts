import {Component} from '@angular/core';
import {CourseService} from "./course/course.service";
import {CourseList} from "./courseList.model";

@Component({
  selector: 'course-list',
  styleUrls: ['./courseList.style.scss'],
  templateUrl: './courseList.template.html'
})
export class CourseListPage {

  courseList: CourseList = new CourseList([], 1);

  private findService: CourseService;

  constructor(private courseService: CourseService) {
    this.findService = courseService;
    this.courseService.getList().subscribe((res: CourseList) => {
      if (!res){
        return;
      }
      this.courseList = res;
    });
  }

  setSearchedList(searchedCourseList) {
    this.courseList = searchedCourseList;
  }

  deleteCourse(data) {
    let self = this;
    this.courseService.updateCourse(data).subscribe((res: boolean) => {
      if (res) {
        self.courseList.courses = self.courseList.courses.filter((item) => {
          return item.id != data.courseId;
        });
      }
    });
  }
}


