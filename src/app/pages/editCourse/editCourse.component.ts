import {Component} from '@angular/core';
import {Course} from "../courses/course/course.model";
import {CourseService} from "../courses/course/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";
import {CustomAlertService} from "../../components/alert";

@Component({
  selector: 'edit-course',
  styleUrls: ['./editCourse.style.scss'],
  templateUrl: './editCourse.template.html'
})
export class EditCoursePage {

  private course: Course = null;
  private authorsCandidates: User[] = [];

  constructor(private courseService: CourseService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService) {
    this.breadcrumbLabels.addLabel(route.snapshot, 'edit');
  }

  ngOnInit() {
    let self = this;
    let id = +this.route.snapshot.parent.params['id'];
    self.courseService.getCourse(id)
      .subscribe((res: Course) => {
        if (!res){
          this.router.navigate(['/courses-list']);
          return;
        }
        self.course = res;
        this.breadcrumbLabels.addLabel(self.route.parent.snapshot, self.course.title);
        self.userService.getAuthorCandidates().subscribe((res: User[]) => {
          self.authorsCandidates = res;
        });
      });
  }

  deleteCourse(data) {
    this.courseService.updateCourse(data).subscribe((res: boolean) => {
      if (res) {
        this.router.navigate(['./courses-list']);
      }
    });
  }

  saveCourse(data) {
    this.courseService.updateCourse(data).subscribe((res: boolean) => {
      if (res) {
        this.router.navigate(['./courses-list']);
      }
    });
  }

}
