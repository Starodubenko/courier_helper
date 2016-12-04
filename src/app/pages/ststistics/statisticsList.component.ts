import {Component} from '@angular/core';
import {CourseService} from "../courses/course/course.service";
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'statistics-list',
  styleUrls: ['statisticsList.style.scss'],
  templateUrl: 'statisticsList.template.html'
})
export class StatisticsListPage {

  constructor(private courseService: CourseService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService){
    this.breadcrumbLabels.addLabel(route.snapshot, "statistics");
  }

  ngOnInit(){

  }
}
