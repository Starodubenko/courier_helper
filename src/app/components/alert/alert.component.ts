import {Component} from '@angular/core';
import {CustomAlertService} from "./alert.service";

@Component({
  selector: 'custom-alert',
  styleUrls: [
    './alert.scss'
  ],
  templateUrl: './alert.template.html'
})
export class CustomAlertComponent{

  private alerts:Array<Object> = [];

  constructor(private customAlertService: CustomAlertService){

  }

  ngOnInit(): void {
    let self = this;
    this.customAlertService.listenService().subscribe(function (alertData) {
      self.alerts.push(alertData);
    })
  }

  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }
}
