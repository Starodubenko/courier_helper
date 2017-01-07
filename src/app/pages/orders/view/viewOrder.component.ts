import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {BreadcrumbService} from "../../../components/breadscrumbs/breadcrumbs.service";
import {CustomerOrder} from "../order.model";
import {OrderService} from "../order.service";

@Component({
  selector: 'view-order',
  styleUrls: ["viewOrder.style.scss"],
  templateUrl: 'viewOrder.template.html'
})
export class OrderViewPage {

  private customerOrder: CustomerOrder;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService,
              private orderService: OrderService) {
    let self = this;
    self.route.params.subscribe((params: Params) => {
      let id = params['id'];
      self.breadcrumbLabels.addLabel(route.snapshot, id);
      self.orderService.getOrder(+id)
        .subscribe((res: CustomerOrder) => {
          if (!res){
            this.router.navigate(['/my-orders']);
            return;
          }
          self.customerOrder = res;
        });
    });


  }

  ngOnInit(){

  }
}
