import {Component, OnInit} from '@angular/core';
import {FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'custom-date',
  styleUrls: [
    './customDate.scss'
  ],
  templateUrl: './customDate.template.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomDateComponent,
      multi: true
    }
  ]
})
export class CustomDateComponent implements ControlValueAccessor {

  private dateRegexStartSymbol = '^';
  private dateRegexEndSymbol = '$';
  private dateDayRegex = '(?:0?[1-9]?|1\\d?|2\\d?|3[1-2]?)';
  private dateMonthRegex = '(?:(?:0[1-9]?)|(?:1[0-2]?))';
  private dateYearRegex = '(\\d){1,4}';
  private datePointRegex = '(\\.)';

  private _date;
  private oldDate = null;

  constructor() {
  }

  propagateChange = (_: any) => {};
  propagateTouch = (_: any) => {};

  writeValue(obj: any): void {
    let stringDate = new DatePipe('ru').transform(obj, 'dd.MM.yyyy');
    let result = this.checkInputedValue(stringDate);
    if (obj !== undefined) {
      if (result.isFullyCollect) {
        this._date = stringDate;
        this.oldDate = stringDate;
      }
    } else {
      this._date = "";
      this.oldDate = this._date;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    let finalDate = null;
    if (value){
      this._date = value;
      let dateArray = value.split('.');
      dateArray.splice(0,0, dateArray.splice(1,1)[0]).join('/');
      finalDate = new Date(dateArray);
    }
    this.propagateChange(finalDate);
  }

  onInputHandler(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    let result = this.checkInputedValue(target.value);
    if (result.isPartiallyCorrect) {
      this._date = target.value;
      this.oldDate = this._date;
      if (target.value == ""){
        this.date = target.value;
      }
    } else if (result.isFullyCollect) {
      this.date = target.value;
      this.oldDate = target.value;
    } else {
      target.value = this.oldDate;
    }
  }

  onTouchHandler(){
    this.propagateTouch(null);
  }

  checkInputedValue(value): CheckingResult {
    let result = new CheckingResult();
    if (new RegExp(this.dateRegexStartSymbol +
        this.dateRegexEndSymbol).test(value)) {
      result.isPartiallyCorrect = true;
    } else if (new RegExp(this.dateRegexStartSymbol +
        this.dateDayRegex +
        this.dateRegexEndSymbol).test(value)) {
      result.isPartiallyCorrect = true;
    } else if (new RegExp(this.dateRegexStartSymbol +
        this.dateDayRegex +
        this.datePointRegex +
        this.dateRegexEndSymbol).test(value)) {
      result.isPartiallyCorrect = true;
    } else if (new RegExp(this.dateRegexStartSymbol +
        this.dateDayRegex +
        this.datePointRegex +
        this.dateMonthRegex +
        this.dateRegexEndSymbol).test(value)) {
      result.isPartiallyCorrect = true;
    } else if (new RegExp(this.dateRegexStartSymbol +
        this.dateDayRegex +
        this.datePointRegex +
        this.dateMonthRegex +
        this.datePointRegex +
        this.dateRegexEndSymbol).test(value)) {
      result.isPartiallyCorrect = true;
    } else if (new RegExp(this.dateRegexStartSymbol +
        this.dateDayRegex +
        this.datePointRegex +
        this.dateMonthRegex +
        this.datePointRegex +
        this.dateYearRegex +
        this.dateRegexEndSymbol).test(value)) {
      value.length === 10 ?
        result.isFullyCollect = true :
        result.isPartiallyCorrect = true;
    }
    return result;
  }
}

class CheckingResult {
  isPartiallyCorrect: boolean = false;
  isFullyCollect: boolean = false;
}
