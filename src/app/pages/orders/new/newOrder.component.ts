import {Component} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "../../../components/breadscrumbs/breadcrumbs.service";
import {CustomerOrder} from "../order.model";
import {Goods} from "../goods.model";
import {GoodsService} from "../goods.service";
import {SafeHtml, DomSanitizer} from "@angular/platform-browser";
import {OrderService} from "../order.service";

@Component({
  selector: 'new-order',
  styleUrls: ['newOrder.style.scss'],
  templateUrl: 'newOrder.template.html'
})
export class NewOrderPage {

  private customerOrder: CustomerOrder;
  private newGoods: Goods = null;
  private newGoodsCount: number = 1;
  private goodsReference: Goods[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService,
              private goodsService: GoodsService,
              private orderService: OrderService,
              private sanitizer: DomSanitizer){
    this.customerOrder = new CustomerOrder();
    this.breadcrumbLabels.addLabel(route.snapshot, "new");

    goodsService.getList().subscribe((list: Goods[]) => {
      this.goodsReference = list
    });
  }

  public goodsSelected(goods) {
    this.newGoods = goods ? goods : null;
  }

  addGoodsToOrder(){
    this.customerOrder.goods.set(this.newGoods, this.newGoodsCount);
    this.newGoods = new Goods(null, "", 0);
    this.newGoodsCount = 1;
  }

  removeGoods(goods: Goods){
    this.customerOrder.goods.delete(goods);
  }

  saveOrder(){
    this.customerOrder.number = Math.random()*1000;
    this.orderService.saveOrder(this.customerOrder);
    this.router.navigate(['../my-orders'], {relativeTo: this.route});
  }

  autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(data.name);
  };

  ngOnInit(){

  }
}
