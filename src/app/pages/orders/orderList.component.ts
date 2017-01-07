import {Component} from '@angular/core';
import {CourseService} from "../courses/course/course.service";
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {BreadcrumbService} from "../../components/breadscrumbs/breadcrumbs.service";
import {AppState} from "../../app.service";
import {NavigationService} from "../../components/navigation/navigation.service";
import {CustomerOrder} from "./order.model";
import {Customer} from "./customer.model";
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {OrderService} from "./order.service";

@Component({
  selector: 'order-list',
  styleUrls: ['orderList.style.scss'],
  templateUrl: 'orderList.template.html'
})
export class OrdersListPage {

  private ORDERS_BAG_NAME = "orders-bag";

  private ordersList: CustomerOrder[] = [];
  private ordersSerachFields = {};
  private ordersBag;
  private searchString;

  private ordersFields = [
    {name: "name", isFindable: false,},
    {name: "surname", isFindable: false,},
    {name: "address", isFindable: false,},
    {name: "", isFindable: false,},
    {name: "", isFindable: false,},
    {name: "", isFindable: false,},
    ];

  public state: number;
  constructor(private courseService: CourseService,
              private userService: UserService,
              private router: Router,
              private appState: AppState,
              private route: ActivatedRoute,
              private breadcrumbLabels: BreadcrumbService,
              private navigationService: NavigationService,
              private dragulaService: DragulaService,
              private orderService: OrderService){
    this.state = navigationService.getState("orders");

    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
    orderService.getList().subscribe((list) => {
      this.ordersList = list;
    });

    // this.ordersSerachFields = this.getSearchFieldsFromClass(new CustomerOrder());
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }
  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

  getOrders(): string{
    return this.ordersList.toString();
  }

  setSearchedList(searchedOrdersList) {
    this.ordersList = searchedOrdersList;
  }

  toggleDragAndDrop(name){
    if (this.dragulaService.find(name).drake.containers.length > 0){
      this.dragulaService.find(name).drake.containers = [];
    } else {
      this.dragulaService.find(name).drake.containers = this.ordersBag;
    }
  }

  isDraggable(name){
    return this.dragulaService.find(name).drake.containers.length > 0
  }

  // private getSearchFieldsFromClass(object){
  //   debugger;
  //   let qweqe = eval("new CustomerOrder();");
  //   for (let prop in object){
  //     debugger;
  //   }
  // }

  openOrderDitails(orderId: number){
    this.router.navigate(['my-orders', orderId]);
  }

  openNewOrder(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnInit(){
    this.breadcrumbLabels.addLabel(this.route.snapshot, "orders");
  }

  ngAfterViewInit(){
    this.state = null;
    this.ordersBag = this.dragulaService.find(this.ORDERS_BAG_NAME).drake.containers;
    this.dragulaService.find(this.ORDERS_BAG_NAME).drake.containers = [];
  }

  ngOnDestroy(){
    this.state = this.navigationService.getState("orders");
  }


}
