import {Component} from '@angular/core';
import {Course} from "../courses/course/course.model";
import {CourseService} from "../courses/course/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'view-course',
  styleUrls: ['./viewCourse.style.scss'],
  templateUrl: './viewCourse.template.html'
})
export class ViewCoursePage {

  private course: Course = null;
  private authorsCandidates: User[] = [];

  constructor(private courseService: CourseService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService) {
  }

  ngOnInit() {
    let self = this;
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.courseService.getCourse(id)
        .subscribe((res: Course) => {
          if (!res){
            this.router.navigate(['/courses-list']);
            return;
          }
          self.course = res;
          this.breadcrumbLabels.addLabel(self.route.parent.snapshot, self.course.title);
        });
    });
  }
}
