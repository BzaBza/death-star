import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPositionPattern]'
})
export class PositionPatternDirective {
  element: ElementRef;

  constructor(private el: ElementRef) {
    this.element = el;
    this.element.nativeElement.style.top = this.getRandomValue(100, 0) + '%';
    this.element.nativeElement.style.left = this.getRandomValue(100, 0) + '%';
  }

  getRandomValue(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
