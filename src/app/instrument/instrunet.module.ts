import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatternGeneratorDirective} from "./color-pattern/pattern-generator.directive";
import {PositionPatternDirective} from "./position-pattern/position-pattern.directive";



@NgModule({
  declarations: [
    PatternGeneratorDirective,
    PositionPatternDirective
  ],
  exports: [
    PatternGeneratorDirective,
    PositionPatternDirective
  ],
  imports: [
    CommonModule
  ]
})
export class InstrumentModule { }
