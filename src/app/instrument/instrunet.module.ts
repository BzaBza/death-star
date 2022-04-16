import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatternGeneratorDirective} from "./color-pattern/pattern-generator.directive";
import {PositionPatternDirective} from "./position-pattern/position-pattern.directive";
import {GridPatternDirective} from "./grid-pattern/grid-pattern.directive";
import { CuboidComponent } from './components/cuboid/cuboid.component';

@NgModule({
  declarations: [
    PatternGeneratorDirective,
    PositionPatternDirective,
    GridPatternDirective,
    CuboidComponent
  ],
    exports: [
        PatternGeneratorDirective,
        PositionPatternDirective,
        GridPatternDirective,
        CuboidComponent
    ],
  imports: [
    CommonModule
  ]
})
export class InstrumentModule { }
