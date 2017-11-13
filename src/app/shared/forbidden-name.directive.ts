import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(nameRe: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe === control.value ? true : false;
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
