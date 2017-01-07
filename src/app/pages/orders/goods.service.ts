
import {CustomerOrder} from "./order.model";
import {AbstractService} from "../../services/abstract.sevice";
import {Injector, Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {URLSearchParams, Response} from "@angular/http";
import {Customer} from "./customer.model";
import {Goods} from "./goods.model";

@Injectable()
export class GoodsService{

  private goodsList: Goods[] = [];

  constructor() {

    let firstGoods = new Goods(1, "Water", 500);
    let secondGoods = new Goods(2, "Plastic Cup x 100", 750);
    let thirdGoods = new Goods(3, "Pompa", 1000);
    let fourthGoods = new Goods(4, "Pompa", 1000);

    this.goodsList.push(firstGoods);
    this.goodsList.push(secondGoods);
    this.goodsList.push(thirdGoods);
    this.goodsList.push(fourthGoods);
  };

  getGoodsById(id: number): Observable<CustomerOrder | boolean> {

    return Observable.create((observer: Observer<Goods>) => {
      observer.next(this.goodsList.filter((item: Goods) => {
        return item.id == id;
      })[0]);
    });

    // let self = this;
    // return this.get(`/api/orders/${id}`)
    //   .map((data) => data ? self.getCourseFromJson(data) : data);
  }

  getList(page = 1, itemsPerPage = 3, filterParameter = "") {

    return Observable.create((observer) => {
      observer.next(this.goodsList);
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

  addGoods(data): Observable<number | boolean> {
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

  updateGoods(data) {
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
