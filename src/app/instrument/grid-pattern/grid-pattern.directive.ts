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
    this.setShape();
  }

  setShape() {
    const line = this.getElementLineNumber();
    if (line === 1) {
      this.element.nativeElement.style.transform = `
      rotateX(${this.getRotateX()}deg)
      rotateY(${this.getRotateY()}deg)
      translateZ(${this.setTranslateZ}px)
      matrix3d(1.5, 0, 0, 0.009, 0, .6, 0, 0, 0, 0, 1, 0, 1, 0, -3, 1.9)`;
      this.element.nativeElement.style.height = '83px'
      this.element.nativeElement.style.width = '142px'

    } else if (line === 2) {
      this.element.nativeElement.style.transform = `
      rotateX(${this.getRotateX()}deg)
      rotateY(${this.getRotateY()}deg)
      translateZ(${this.setTranslateZ}px)
      matrix3d(1, 0, 0, 0.0017, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
      this.element.nativeElement.style.height = '127px'
      this.element.nativeElement.style.width = '124px'
    } else if (line === 4) {
      this.element.nativeElement.style.transform = `
      rotateX(${this.getRotateX()}deg)
      rotateY(${this.getRotateY()}deg)
      translateZ(${this.setTranslateZ}px)
      matrix3d(1, 0, 0, 0.0017, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
      this.element.nativeElement.style.height = '127px'
      this.element.nativeElement.style.width = '124px'
    } else if (line === 5) {
      this.element.nativeElement.style.transform = `
      rotateX(${this.getRotateX()}deg)
      rotateY(${this.getRotateY()}deg)
      translateZ(${this.setTranslateZ}px)
      matrix3d(1.5, 0, 0, 0.009, 0, .6, 0, 0, 0, 0, 1, 0, 1, 0, -3, 1.9)`;
      this.element.nativeElement.style.height = '83px'
      this.element.nativeElement.style.width = '142px'
    } else {
      this.element.nativeElement.style.transform = `rotateX(${this.getRotateX()}deg) rotateY(${this.getRotateY()}deg) translateZ(${this.setTranslateZ}px)`;
    }
  }


  getElementLineNumber(): number {
    const yPosition = this.getRotateY()
    if (yPosition === 240) {
      return 1;
    }

    if (yPosition === 210) {
      return 2;
    }

    if (yPosition === 180) {
      return 3;
    }

    if (yPosition === 30) {
      return 4;
    }

    if (yPosition === 120 || yPosition === 60) {
      return 5;
    }
    return 0;
  }

  getRotateX(): number {
    if (this.elementIndex < 5) {
      return 0;
    } else if (this.elementIndex < 10) {
      return 30;
    } else if (this.elementIndex < 15) {
      return 60;
    } else if (this.elementIndex < 20) {
      return 90;
    } else if (this.elementIndex < 25) {
      return 120;
    } else if (this.elementIndex < 30) {
      return 150;
    } else if (this.elementIndex < 35) {
      return 180;
    } else if (this.elementIndex < 40) {
      return 210;
    } else if (this.elementIndex < 45) {
      return 240;
    } else if (this.elementIndex < 55) {
      return 270;
    } else if (this.elementIndex < 60) {
      return 300;
    } else if (this.elementIndex < 65) {
      return 330;
    }
    else if (this.elementIndex < 70) {
      return 360;
    }
    return 0;
  }

  getRotateY(): number {
    let index = this.elementIndex;
    while (index > 8) {
      index = index - 5;
    }
    if (index === 4) {
      index = 2;
    }
    if (index === 5) {
      index = 1;
    }
    return index * 30;
  }
}

