import {Injectable} from "@angular/core";
import {CustomStatisticsTab} from "./tab.model";

@Injectable()
export class TabService {

  private _tabs: CustomStatisticsTab[] = [];


  constructor() {
    let firstCustomTab: CustomStatisticsTab = new CustomStatisticsTab("First tab", null);
    let secondCustomTab: CustomStatisticsTab = new CustomStatisticsTab("Second tab", null);
    let thirdCustomTab: CustomStatisticsTab = new CustomStatisticsTab("Third tab", null);

    this._tabs.push(firstCustomTab);
    this._tabs.push(secondCustomTab);
    this._tabs.push(thirdCustomTab);
  }

  addTab(newTab: CustomStatisticsTab){
    this._tabs.push(newTab);
  }

  removeTab(tabId){

  }

  toggleTabVisibility(tabId){

  }

  get tabs(): CustomStatisticsTab[] {
    return this._tabs;
  }

  set tabs(value: Array) {
    this._tabs = value;
  }
}
