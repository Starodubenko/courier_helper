import {Component} from '@angular/core';
import {CourseService} from "../courses/course/course.service";
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";
import {AppState} from "../../app.service";
import {NavigationService} from "../../components/navigation/navigation.service";

@Component({
  selector: 'order-list',
  styleUrls: ['orderList.style.scss'],
  templateUrl: 'orderList.template.html'
})
export class OrdersListPage {

  public state: number;
  constructor(private courseService: CourseService,
              private userService: UserService,
              private router: Router,
              private appState: AppState,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService,
              private navigationService: NavigationService){
    this.breadcrumbLabels.addLabel(route.snapshot, "orders");
    this.state = navigationService.getState("orders");
  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.state = null;
  }

  ngOnDestroy(){
    this.state = this.navigationService.getState("orders");
  }
}
