import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appGridPatternGenerator]'
})
export class GridPatternDirective implements OnChanges {

  @Input() elementIndex: number = 0;
  @Input() itemsSum: number = 0;
  @Input() setTranslateZ: number = 0;

  element: ElementRef;

  constructor(private el: ElementRef) {
    this.element = el;
  }

  ngOnChanges(): void {
    this.setElementParams();
  }

  setElementParams(): void {
    this.element.nativeElement.style.transform = `rotateX(${this.getRotateX()}deg) rotateY(${this.getRotateY()}deg) translateZ(${this.setTranslateZ}px)`;
  }

  getRotateX(): number {
    if (this.elementIndex < 10) {
      return 0;
    } else if (this.elementIndex < 20) {
      return 30;
    } else if (this.elementIndex < 30) {
      return 60;
    } else if (this.elementIndex < 40) {
      return 90;
    } else if (this.elementIndex < 50) {
      return 120;
    } else if (this.elementIndex < 60) {
      return 150;
    } else if (this.elementIndex < 70) {
      return 180;
    } else if (this.elementIndex < 80) {
      return 210;
    } else if (this.elementIndex < 90) {
      return 240;
    } else if (this.elementIndex < 100) {
      return 270;
    } else if (this.elementIndex < 110) {
      return 300;
    } else if (this.elementIndex < 120) {
      return 330;
    } else if (this.elementIndex < 130) {
      return 360;
    }
    return 0;
  }

  getRotateY(): number {
    let index = this.elementIndex;
    if (index > 8) {
      while (index > 8) {
        index = index - 8;
      }
    }

    return index * 30;
  }
}
