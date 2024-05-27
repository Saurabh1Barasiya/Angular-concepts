import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';
  userForm!:FormGroup;
  submitted!:boolean;

  constructor(){
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required)
      }),
      skills: new FormArray([]) // Initialize skills as FormArray
    }, );
    { validators: this.passwordMatchValidator }
  }

   passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) return null;
    return password.value === confirmPassword.value ? null : { notMatching: true };
  };


  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);
  }


  // Its a getter.
  get skillsDetils() {
    // yaha par array typecast bhi ho gaya h. 
    // ye form array me convert ho gaya h.
    return this.userForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skillsDetils.push(new FormControl('', Validators.required));
  }

  removeSkill(index: number) {
    this.skillsDetils.removeAt(index);
  }


}
