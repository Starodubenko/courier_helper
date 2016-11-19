import { Component } from '@angular/core';
import {Animations} from "../../app.animations";
import {AppState} from "../../app.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'home',
  styleUrls: [ 'home.style.scss' ],
  templateUrl: './home.template.html',
  host: { '[@routeAnimation]': 'this.appState.state'},
  animations: Animations.page
})
export class Home {

  public state:string = 'home';

  constructor(private appState: AppState,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService){
    this.appState.state = this.state;
    this.breadcrumbLabels.addLabel(route.snapshot, "home");
  }

  ngOnInit() {

  }

}
