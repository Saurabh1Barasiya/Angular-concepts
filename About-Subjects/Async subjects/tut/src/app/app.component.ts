import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tut';

  ngOnInit(): void {
    const subject = new AsyncSubject();

    subject.next(100);
    subject.next(200);
    subject.next(300);
    subject.complete();


    // it will also gives you last emitted value.
    // make sure you write complete() method.
    // without complete() it will not give you any result.

    subject.subscribe((data)=>{
      console.log(data);
    });


    // once the complete() fire. it will not emitted new values.
    // it will also gives last emitted value before complete() method.
    subject.next(222);
    // 👀👀 ye upar wali line se koi farq nahi padega.


  }
}
