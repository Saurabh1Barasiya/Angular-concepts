import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  constructor() { }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
