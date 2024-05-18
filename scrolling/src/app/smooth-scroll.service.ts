import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  constructor() { }

  scrollToElement(element: any) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
