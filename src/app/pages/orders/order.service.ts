
import {CustomerOrder} from "./order.model";
import {AbstractService} from "../../services/abstract.sevice";
import {Injector, Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {URLSearchParams, Response} from "@angular/http";
import {Customer} from "./customer.model";
import {Goods} from "./goods.model";

@Injectable()
export class OrderService{

  private orders: CustomerOrder[] = [];

  constructor() {

    let firstCustomer = new Customer("Vasily", "Ivanovich", "Pupkin", "Gulder 1");
    let secondCustomer = new Customer("Petr", "Ivanovich", "Kuznecov", "Gulder 2");
    let thirdCustomer = new Customer("Alexey", "Ivanovich", "Djidov", "Gulder 3");

    let firstGoods = new Map();
    let secondGoods = new Map();
    let thirdGoods = new Map();

    firstGoods.set(new Goods(1, "Water", 500), 2);
    firstGoods.set(new Goods(2, "Plastic Cup x 100", 750), 1);
    secondGoods.set(new Goods(3, "Pompa", 1000), 1);
    thirdGoods.set(new Goods(4, "Cooler", 2000),1);

    let firstOrder = new CustomerOrder(1,firstCustomer, firstGoods);
    let secondOrder = new CustomerOrder(2,secondCustomer, secondGoods);
    let thirdOrder = new CustomerOrder(3,thirdCustomer, thirdGoods);

    this.orders.push(firstOrder);
    this.orders.push(secondOrder);
    this.orders.push(thirdOrder);
  };

  getOrder(id: number): Observable<CustomerOrder | boolean> {

    return Observable.create((observer: Observer<CustomerOrder>) => {
      observer.next(this.orders.filter((item: CustomerOrder) => {
        return item.number == id;
      })[0]);
    });

    // let self = this;
    // return this.get(`/api/orders/${id}`)
    //   .map((data) => data ? self.getCourseFromJson(data) : data);
  }

  getList(page = 1, itemsPerPage = 3, filterParameter = "") {

    return Observable.create((observer) => {
      observer.next(this.orders);
    });

    // let searchParams = new URLSearchParams();
    // searchParams.set("page", page.toString());
    // searchParams.set("itemsPerPage", itemsPerPage.toString());
    // searchParams.set("filter", filterParameter);
    //
    // return this.get("/api/orders", searchParams)
    //   .map((res: Response) => this.getCoursesListFromJson(res))
    //   .map((courseList: CustomerOrder[]) => {
    //     let pageCount: number = Math.ceil(courseList.length / itemsPerPage);
    //     return new CustomerOrderList(courseList, pageCount);
    //   })
  }

  saveOrder(data): Observable<number | boolean> {
    this.orders.push(data);
    return null;
    // return this.post("/api/orders", {data: data.data});
  }

  // removeCourse(id: number): Observable<boolean> {
  //   let self = this;
  //   return Observable.create(observer => {
  //     this.http.delete(self.getDomain() + "/api/orders", {courseId: id})
  //       .subscribe((res: Response) => {
  //         observer.next(res.json())
  //       });
  //   })
  // }

  updateCourse(data) {
    // return this.put("/api/orders", {orderId: data.orderId, data: data.changes});
  }

  getCourseFromJson(json): CustomerOrder {
    return null;
    // return new CustomerOrder(
    //   +json.id,
    //   json.title,
    //   new Date(json.date),
    //   +json.duration,
    //   json.description,
    //   UserService.getUsersListFromJson(json.authors)
    // );
  }

  getCoursesListFromJson(json): CustomerOrder[] {
    return null;
    // let self = this;
    // let result: CustomerOrder[] = [];
    // json.forEach(item => {
    //   result.push(self.getCourseFromJson(item))
    // });
    // return result;
  }
}
