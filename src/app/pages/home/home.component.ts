import { Component } from '@angular/core';
import {Animations} from "../../app.animations";
import {AppState} from "../../app.service";

@Component({
  selector: 'home',
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html',
  host: { '[@routeAnimation]': 'this.appState.state'},
  animations: Animations.page
})
export class Home {

  public state:string = 'home';

  constructor(private appState: AppState){
    this.appState.state = this.state;
  }

  ngOnInit() {

  }

}
