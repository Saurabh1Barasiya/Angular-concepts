import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';

  constructor(private route:Router){

  }

  loder:boolean=false;

  formSubmitted(){
    this.loder = true;
    console.log(this.email,this.password);

    setTimeout(() => {
      this.loder = false;
      if(this.email === 'saurabh@gmail.com' && this.password === '123456'){
        this.route.navigate(["dashboard"]);
      }else{
        alert("Invalid credantials...");
      }
    }, 2000);

  }
}
