import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Submit(myForm:any){
    // console.log(myForm);
    console.log(myForm.value);

    // form ki value reset karna ho to.
    myForm.reset();
  }
}
