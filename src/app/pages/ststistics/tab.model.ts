import {CustomChart} from "./chart.model";

export class CustomStatisticsTab {

  private _header: string;
  private _chart: CustomChart;


  constructor(name: string, chart: CustomChart) {
    this._header = name;
    this._chart = chart;
  }


  get header(): string {
    return this._header;
  }

  set header(value: string) {
    this._header = value;
  }

  get chart(): CustomChart {
    return this._chart;
  }

  set chart(value: CustomChart) {
    this._chart = value;
  }
}
