import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut-dcrolling';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("URL",this.router.url);
        console.log("Parse URL",this.router.parseUrl(this.router.url).fragment);
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  
}
