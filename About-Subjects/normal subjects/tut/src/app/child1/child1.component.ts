import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  val:string = "HEllo i am child data";

  constructor(private sh:ShareService){}

  send(){
    this.sh.sendData(this.val)
  }
}
