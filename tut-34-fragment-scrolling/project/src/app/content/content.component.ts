import { Component } from '@angular/core';
// import { SmoothScrollService } from '../Services/smooth-scroll.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  // constructor(private smoothService:SmoothScrollService){}

  // scrollTo(sectionId: string) {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     this.smoothService.scrollToElement(element);
  //   }
  // }



  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          console.log("fragment got",fragment);
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  
}
