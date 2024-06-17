import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  // items = ['apple', 'banana', 'orange', 'mango','apple'];
  // searchText = '';
  // addItem() {
  //   this.items.push('new fruit');
  // }

  items = ['apple', 'banana', 'orange', 'mango'];

  addItem() {
    this.items = [...this.items, 'apple'];
  }

}
