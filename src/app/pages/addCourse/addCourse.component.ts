import {Component} from '@angular/core';
import {Course} from "../courses/course/course.model";
import {CourseService} from "../courses/course/course.service";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";
import {CustomAlertService} from "../../components/alert";

@Component({
  selector: 'add-course',
  styleUrls: ['./addCourse.style.scss'],
  templateUrl: './addCourse.template.html'
})
export class AddCoursePage {

  course: Course = new Course();
  authorsCandidates: User[] = [];

  constructor(private courseService: CourseService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService){
    this.breadcrumbLabels.addLabel(route.snapshot, "new");
  }

  ngOnInit(){
    let self = this;
    this.userService.getAuthorCandidates().subscribe((res: User[]) => {
      self.authorsCandidates = res;
    });
  }

  addCourse(newCourseData){
    let self = this;
    this.courseService.addCourse(newCourseData).subscribe((res:boolean) => {
      if (res) {
        self.router.navigate(['./courses-list']);
      }
    });
  }

}
