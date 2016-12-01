import { Component } from '@angular/core';
import {AppState} from "../../app.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationService} from "../../components/navigation/navigation.service";

@Component({
  selector: 'home',
  styleUrls: [ 'home.style.scss' ],
  templateUrl: './home.template.html'
})
export class Home {

  public state: number;

  constructor(private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService,
              private navigationService: NavigationService,
              private router: Router){
    this.breadcrumbLabels.addLabel(route.snapshot, "home");
    this.state = navigationService.getState("home");
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.state = null;
  }

  ngOnDestroy(){
    this.state = this.navigationService.getState("home");
  }

}
