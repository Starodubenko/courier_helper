import {FormControl} from "@angular/forms";

export function onlyLatinLettersValidator(control: FormControl) {
  const REGEX = /^[A-z]+$/;
  if (!REGEX.test(control.value)){
    return{
      onlyLetters: true
    }
  }
  return null;
}
