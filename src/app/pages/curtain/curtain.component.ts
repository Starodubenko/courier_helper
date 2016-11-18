import {Component} from '@angular/core';
import {Animations} from "../../app.animations";
import {AppState} from "../../app.service";
import {AbstractPageComponent} from "../abstract.page.compponent";


@Component({
  selector: 'curtain',
  templateUrl: './curtain.template.html',
  styleUrls: ['./curtain.style.scss'],
  host: { '[@routeAnimation]': 'this.appState.state'},
  animations: Animations.page
})
export class CurtainComponent{

  public state:string = 'login';

  constructor(private appState: AppState){
    this.appState.state = this.state;
  }
}
