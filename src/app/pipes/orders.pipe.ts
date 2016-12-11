import {PipeTransform, Pipe} from "@angular/core";
import {CourseService} from "../pages/courses/course/course.service";
import {CourseList} from "../pages/courses/courseList.model";
import {CustomerOrder} from "../pages/orders/order.model";

@Pipe({
  name: 'ordersListPipe'
})
export class CourseListPipe implements PipeTransform {

  constructor(private courseServise: CourseService){

  }

  transform(orders: any, additionalParameters: string){
    let result: CustomerOrder[] = orders;



    return result;
  }
}
