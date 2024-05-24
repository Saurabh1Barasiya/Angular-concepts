import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut1';

  submit(myForm:any){
    console.log(myForm);


    // getting all the value form single input box.
    console.log(myForm.controls.fistname.value);
    console.log(myForm.controls.lastname.value);
    console.log(myForm.controls.email.value);
    console.log(myForm.controls.gender.value);
    console.log(myForm.controls.address.value);
    console.log(myForm.controls.terms.value);

    myForm.reset();
  }
}
