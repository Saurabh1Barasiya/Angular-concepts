import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit{
  constructor(private sh:ShareService){}
  incomingData!:string;
  ngOnInit(): void {
    this.sh.dataSubject.subscribe((data)=>{
      this.incomingData = data;
    })
  }

  
}
