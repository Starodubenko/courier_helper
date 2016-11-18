import {Component} from '@angular/core';
import {CourseService} from "../courses/course/course.service";
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {BreadcrumbService} from "../../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'view-order',
  styleUrls: ['viewOrder.style.scss'],
  templateUrl: 'viewOrder.template.html'
})
export class OrderViewPage {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService
  ){
    this.breadcrumbLabels.addLabel(route.snapshot, "new");
  }

  ngOnInit(){

  }
}
