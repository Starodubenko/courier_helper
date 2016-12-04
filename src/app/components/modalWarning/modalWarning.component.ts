import {Component, Input, OnInit, ElementRef} from '@angular/core';
import {ModalWarningService} from "./modalWarning.service";
import {ViewChild} from "@angular/core/src/metadata/di";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
// import {ModalDirective} from "ng2-bootstrap";

@Component({
  selector: 'modal-warning',
  styleUrls: [
    './modalWarning.scss'
  ],
  templateUrl: './modalWarning.template.html'
})
export class ModalWarningComponent implements OnInit{

  // @ViewChild('modalWarning')
  // private modalWarning: ModalDirective;
  private title = "";
  private content = "";
  private mainAction = function (callback) {
    callback();
    this.modalWarning.hide();
  };
  private yesAction = function () {};
  private noAction = function () {};


  constructor(private modalWarningService: ModalWarningService) {

  }

  ngOnInit(): void {
    let self = this;
    this.modalWarningService.listenService().subscribe(function (warningData) {
      self.title = warningData.title;
      self.content = warningData.content;
      self.yesAction = function(){
        self.mainAction(warningData.yesAction);
      };
      self.noAction = function(){
        self.mainAction(warningData.noAction);
      };
      // self.modalWarning.show();
    })
  }
}
