import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut1';



  // userForm: FormGroup;

  // constructor() {
  //   // Manually initialize the FormGroup and add form controls
  //   this.userForm = new FormGroup({
  //     firstname: new FormControl('', Validators.required),
  //     lastname: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(6)])
  //   });
  // }

  // // ngOnInit lifecycle hook
  // ngOnInit(): void { }

  // // Form submit hone par ye method call hoga
  // onSubmit() {
  //   if (this.userForm.valid) {
  //     console.log(this.userForm.value); // Agar form valid hai to form data console me log karega
  //   } else {
  //     console.log('Form is invalid'); // Agar form invalid hai to error message dikhayega
  //   }
  // }


  userForm!:FormGroup;
  submitted: boolean = false;

   // loginForm(){
  //   if(this.userForm.valid){
  //     console.log(this.userForm.value);
  //   }else{
  //     console.log("Form is not Valid...");
  //   }
  // }

  constructor(){


    this.userForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    } , { validators: this.passwordMatchValidator }  );



  }

 

  loginForm() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    // Handle form submission if valid
    console.log(this.userForm);
  }



  private passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    console.log(password?.value,confirmPassword?.value);
    if (!password || !confirmPassword) {
      alert("oe");
      return null;
    }
      
    return password.value === confirmPassword.value ? null : { notMatching: true };
  };
}
