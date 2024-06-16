import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tut';

  ngOnInit(){
    // const subject = new Subject();
    const subject = new ReplaySubject();

    // we have 2 paramenter bufferSize,windowSize.
    // bufferSize = kitni value store karega by default infnite hoti h.
    // windowSize = kitni der tak rakhega apne pass.

    subject.next(100);
    subject.next(200);
    subject.next(300);

    // Subject purani value ko yaad nahi karta hai.
    // if we are using Replay subject,so it will remember the things. 


    subject.subscribe((data)=>{
      console.log("subscriber 1",data);
    });

    subject.subscribe((data)=>{
      console.log("subscriber 2",data);
    });

    subject.subscribe((data)=>{
      console.log("subscriber 3",data);
    });

    subject.next(123);

    subject.subscribe((data)=>{
      console.log("subscriber 4",data);
    });


  }
}
