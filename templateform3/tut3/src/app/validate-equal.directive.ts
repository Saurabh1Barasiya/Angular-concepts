import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidateEqual]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateEqualDirective, multi: true }]
})
export class ValidateEqualDirective implements Validator {

  constructor() { }

  @Input('appValidateEqual') controlNameToCompare!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToCompare = control.root.get(this.controlNameToCompare);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { notEqual: true };
    }
    return null;
  }
}
