import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tut';

  ngOnInit() {
    // const mySubject = new Subject();

    // So with the help of this BehaviorSubject we can assign initial value, but in normal subject it can not  be possible.
    const mySubject = new BehaviorSubject<number>(100);

    // subscriber 1
    mySubject.subscribe((data)=>{
      console.log("subscriber 1",data);
    })

    // subscriber 2
    mySubject.subscribe((data)=>{
      console.log("subscriber 2",data);
    })

    mySubject.next(200);

    // subscriber 3
    mySubject.subscribe((data)=>{
      console.log("subscriber 3",data);
    })

    mySubject.next(300);

  }

  
}
