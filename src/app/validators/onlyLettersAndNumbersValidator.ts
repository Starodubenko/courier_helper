import {FormControl} from "@angular/forms";

export function onlyLettersAndNumbersValidator(control: FormControl) {
  const REGEX = /^\w+$/;
  if (!REGEX.test(control.value)){
    return{
      onlyLettersAndNumbers: true
    }
  }
  return null;
}
