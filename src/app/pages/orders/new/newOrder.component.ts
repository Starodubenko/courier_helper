import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "../../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'new-order',
  styleUrls: ['newOrder.style.scss'],
  templateUrl: 'newOrder.template.html'
})
export class NewOrderPage {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService){
    this.breadcrumbLabels.addLabel(route.snapshot, "new");
  }

  ngOnInit(){

  }
}
