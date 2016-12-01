import {Injectable} from "@angular/core";
import {AsyncSubject, Observable, Observer} from "rxjs";
export enum StateTypes {
  Top, Bottom, Middle, Left, Right
}

export enum AxisType {
  Horizontal, Vertical
}

@Injectable()
export class NavigationService {
  public navigationModel: Observable<any>;
  public navigationModelObserver;

  public model = [
    {
      name: 'login',
      state: StateTypes.Top,
      children: []
    },
    {
      name: 'home',
      state: StateTypes.Top,
      children: []
    },
    {
      name: 'my-orders',
      state: StateTypes.Top,
      children: [
        {
          name: 'newOrder',
          state: StateTypes.Left,
          children: []
        },
        {
          name: 'viewOrder',
          state: StateTypes.Left,
          children: []
        }
      ]
    },
    {
      name: 'statistics',
      state: StateTypes.Top,
      children: []
    },
    {
      name: 'chief',
      state: StateTypes.Top,
      children: []
    }
  ];

  constructor(){
    let self = this;
    self.navigationModel = new Observable<any>(observer => {
      self.navigationModelObserver = observer;
    });
  }

  private setItemToTheMiddle(array, axisType, index){
    // debugger;
    // if (axisType == AxisType.Vertical){
    //   array[index].state = array[index].state == StateTypes.Top ?
    //     StateTypes.Bottom :
    //     StateTypes.Top;
    // }
    // if (axisType == AxisType.Horizontal) {
    //   array[index].state = array[index].state == StateTypes.Left ?
    //     StateTypes.Right :
    //     StateTypes.Left;
    // }

    for (let i = index + 1; i < array.length; i++){
      if (axisType == AxisType.Vertical){
        array[i].state = StateTypes.Bottom;
      } else {
        array[i].state = StateTypes.Right;
      }
    }
    for (let i = index - 1; i >= 0; i--){
      if (axisType == AxisType.Vertical){
        array[i].state = StateTypes.Top;
      } else {
        array[i].state = StateTypes.Left;
      }
    }
  }

  // todo that's could be rebuild to recursion
  // private getStatePositionIdexes(stateName: string){
  //   let result: number[] = [];
  //   this.navigationModel.forEach((firstLevelItem, fistLevelIndex) => {
  //     if (firstLevelItem.name == stateName) {
  //       result.push(fistLevelIndex);
  //     } else if (firstLevelItem.children.length) {
  //       firstLevelItem.children.forEach((secondLevelItem, secondLevelIndex) => {
  //         if (secondLevelItem.name == stateName) {
  //           result.push(secondLevelIndex);
  //         }
  //       })
  //     }
  //   });
  //   return result;
  // }

  public getState(stateName: string): number {
    let result: number = -1;
    this.model.forEach((firstLevelItem) => {
      if (firstLevelItem.name == stateName) {
        result = firstLevelItem.state;
      } else if (firstLevelItem.children.length) {
        firstLevelItem.children.forEach((secondLevelItem) => {
          if (secondLevelItem.name == stateName) {
            result =  secondLevelItem.state;
          }
        })
      }
    });
    return result;
  }

  calculateStates(nextStateName: string) {
    //todo determine current and next state position
    //todo if next lower than previous, previousState state set to top but nextState set to middle. And vice versa. (same for horizontal)
    //todo to implement each side state animation and middle.
    //todo to extract all this to AppService
    //todo check each state and if it's higher than next then set it top position.
    //todo if state is second level try to implement animation that second one level wait first one.
    let self = this;
    self.model.forEach((firstLevelItem, fistLevelIndex) => {
      if (firstLevelItem.name == nextStateName) {
        self.setItemToTheMiddle(self.model, AxisType.Vertical, fistLevelIndex);
      } else if (firstLevelItem.children.length) {
        firstLevelItem.children.forEach((secondLevelItem, secondLevelIndex) => {
          if (secondLevelItem.name == nextStateName) {
            firstLevelItem.state = StateTypes.Middle;
            self.setItemToTheMiddle(self.model, AxisType.Vertical, fistLevelIndex);
            self.setItemToTheMiddle(firstLevelItem.children, AxisType.Horizontal, secondLevelIndex);
          }
        })
      }
    })
  }
}
