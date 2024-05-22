import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateform1';
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form);
      console.log("Value",form.value)
      form.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
