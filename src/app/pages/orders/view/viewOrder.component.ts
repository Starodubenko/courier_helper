import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "../../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'view-order',
  styleUrls: ["viewOrder.style.scss"],
  templateUrl: 'viewOrder.template.html'
})
export class OrderViewPage {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService
  ){
    this.breadcrumbLabels.addLabel(route.snapshot, "#23251");
  }

  ngOnInit(){

  }
}
