import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  userForm!:FormGroup;

  constructor(){
    this.userForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),

      skills:new FormArray([]),
    });
  }

  // now we are creating getter .
  get get_skills(){
    return this.userForm.get('skills') as FormArray;
  }

  addSkill(){
   this.get_skills.push(new FormControl('',Validators.required));
  }

  remove(index:any){
    this.get_skills.removeAt(index)
  }

  submit(){
    console.log("form submitted...");
  }

}
