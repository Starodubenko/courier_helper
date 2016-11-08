import {FormControl} from "@angular/forms";

export function atLeastOneItemInArray(control: FormControl) {
  if (control.value.length < 1){
    return{
      atLeastOneItemInArray: true
    }
  }
  return null;
}
