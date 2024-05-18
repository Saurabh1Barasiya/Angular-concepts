import { Component } from '@angular/core';
import {SmoothScrollService} from '../smooth-scroll.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(private smoothService:SmoothScrollService){}

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      this.smoothService.scrollToElement(element);
    }
  }
}
