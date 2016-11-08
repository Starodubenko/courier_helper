import {Component, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'course-list-container',
  encapsulation: ViewEncapsulation.None,
  template: `
        <div>
             <router-outlet></router-outlet>
        </div>
    `
})
export class CourseListContainer {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService) {
    this.breadcrumbLabels.addLabel(route.snapshot, "list");
  }
}
