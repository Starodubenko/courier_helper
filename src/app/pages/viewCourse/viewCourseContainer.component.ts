import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'view-course-container',
  template: `
        <div>
             <router-outlet></router-outlet>
        </div>
    `
})
export class ViewCourseContainer {

}
