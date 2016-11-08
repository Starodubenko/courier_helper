import {Component, Output, Input, EventEmitter, forwardRef} from '@angular/core';
import {SelectOption} from "./selectOption.model";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'select-authors',
  styleUrls: [
    './selectAuthors.scss'
  ],
  templateUrl: './selectAuthors.template.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectAuthorsComponent),
      multi: true
    }
  ]
})
export class SelectAuthorsComponent implements ControlValueAccessor{

  propagateChange = (_: any) => {};
  propagateTouch = (_: any) => {};

  writeValue(obj: any): void {
    this.selectedItems = obj;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  @Input('options')
  private options: SelectOption[];

  private selectedItems: number[] = [];
  private selectedLeft: number[] = [];
  private selectedRight: number[] = [];

  leftChange(options) {
    this.selectedLeft = Array.apply(null,options)
      .filter(option => option.selected)
      .map(option => +option.value);
  }

  rightChange(options) {
    this.selectedRight = Array.apply(null,options)
      .filter(option => option.selected)
      .map(option => +option.value);
  }

  isLeftSelectedElement(id){
    return this.selectedLeft.indexOf(id) != -1;
  }
  isRightSelectedElement(id){
    return this.selectedRight.indexOf(id) != -1;
  }

  moveCandidateToRight(){
    this.selectedItems = this.selectedItems.concat(this.selectedLeft);
    this.propagateChange(this.selectedItems);
  }

  moveCandidateToLeft(){
    let self = this;
    this.selectedItems = this.selectedItems.filter(function (item) {
      return self.selectedRight.indexOf(item) == -1;
    });
    this.propagateChange(this.selectedItems);
  }

  onTouchHandler(){
    this.propagateTouch(null);
  }
}
