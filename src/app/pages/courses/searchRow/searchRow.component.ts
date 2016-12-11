import {Component, Input, Output, EventEmitter, PipeTransform} from '@angular/core';
import {CourseList} from "../courseList.model";

@Component({
  selector: 'search-row',
  styleUrls: ['./searchRow.style.scss'],
  templateUrl: './searchRow.template.html'
})
export class SearchRowComponent {

  searchingRow: string = "";

  @Output('find')
  findEvent = new EventEmitter();

  @Input('serviceForSearching')
  private servise: any;

  @Input('filteringArray')
  private filteringArray: any;

  @Input('searchFields')
  private searchFields: any;

  findCourses(pipe:PipeTransform){
    if (this.servise){
      this.servise.getList(this.searchingRow, 0, 5).subscribe((res:CourseList) => {
        this.findEvent.emit(res);
      });
    } else if (pipe && this.filteringArray){
      this.findEvent.emit(pipe.transform(this.filteringArray, {searchRow: this.searchingRow, searchFields: this.searchFields}));
    } else {
      this.findEvent.emit([]);
    }
  }
}
