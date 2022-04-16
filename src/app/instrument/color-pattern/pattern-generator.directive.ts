import {Directive, ElementRef, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ColorPatternInterface} from "./color-pattern.interface";

@Directive({
  selector: '[appPositionPatternGenerator]'
})
export class PatternGeneratorDirective implements OnChanges{

  @Input() maxSize: number = 1;
  @Input() minSize: number = 1;
  @Input() colorScope: number = 1;
  @Input() alfaColorScope: number = 1;
  @Input() shadowConfig: string = '';
  @Output() generatedColor = new EventEmitter<string>();

  elementParams!: ColorPatternInterface;
  element: ElementRef;
  color!: string;

  constructor(private el: ElementRef) {
    this.element = el;
  }

  ngOnChanges() {
    this.buildColor()
    this.createElement()
    this.setElementParams();
  }

  setElementParams() {
    this.element.nativeElement.style.backgroundColor = this.elementParams.mainColor;
    this.element.nativeElement.style.width = this.elementParams.width + 'px';
    this.element.nativeElement.style.height = this.elementParams.height + 'px';
    this.element.nativeElement.style.borderRadius = this.getRandomValue(100, 40) + '%';
    this.element.nativeElement.style.display = 'block';
    this.element.nativeElement.style.position = 'absolute';
    if(this.shadowConfig) {
      this.element.nativeElement.style.boxShadow = this.shadowConfig + ' ' + this.color;
    } else {
      this.element.nativeElement.style.boxShadow = '10px 0 40px 120px ' + this.color;
    }
  }

  createElement(): void{
    let color = this.color;
    this.elementParams = {
      mainColor: color,
      secondaryColor: this.getSecondary(color),
      width: this.getRandomValue(this.maxSize, this.minSize),
      height: this.getRandomValue(this.maxSize, this.minSize),
    }
  }

  getRandomValue(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getSecondary(color: string): string {
    return color.substring(0, color.length - 3) + '20)';
  }

  buildColor(): void {
    let r = this.getRandomValue(this.colorScope,this.colorScope / (this.colorScope - .9));
    let g = this.getRandomValue(this.colorScope,this.colorScope / (this.colorScope - .9));
    let b = this.getRandomValue(this.colorScope,this.colorScope / (this.colorScope - .9));
    let a = this.getRandomValue(this.alfaColorScope, this.alfaColorScope);
    this.color = `rgba(${r},${g},${b},${a})`;
    this.generatedColor.emit(this.color)
  }
}
