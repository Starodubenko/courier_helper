import {Component, state} from '@angular/core';
import {AppState} from "../../app.service";
import {NavigationService} from "../../components/navigation/navigation.service";
import {Router} from "@angular/router";


@Component({
  selector: 'curtain',
  templateUrl: './curtain.template.html',
  styleUrls: ['./curtain.style.scss']
})
export class CurtainComponent{

  public state: number;

  constructor(private navigationService: NavigationService,
              private router: Router){
    this.state = navigationService.getState("login");
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.state = null;
  }

  ngOnDestroy(){
    this.state = this.navigationService.getState("login");
  }
}
