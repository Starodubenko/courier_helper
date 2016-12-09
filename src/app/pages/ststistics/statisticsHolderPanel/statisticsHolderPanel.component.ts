import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "../../../components/breadscrumbs/breadcrumbs.service";

@Component({
  selector: 'statistics-holder-panel',
  styleUrls: ['statisticsHolderPanel.style.scss'],
  templateUrl: 'statisticsHolderPanel.template.html'
})
export class StatisticsHolderPanelComponent {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService){
    this.breadcrumbLabels.addLabel(route.snapshot, "new");
  }

  ngOnInit(){

  }
}
