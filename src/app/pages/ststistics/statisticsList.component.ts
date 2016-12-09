import {Component} from '@angular/core';
import {CourseService} from "../courses/course/course.service";
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";
import {TabService} from "./tab.service";

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
              private breadcrumbLabels: BreadcrumbService,
              public statisticsTabsService: TabService){
    this.breadcrumbLabels.addLabel(route.snapshot, "statistics");
  }

  ngOnInit(){

  }
}
