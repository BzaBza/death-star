import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatternGeneratorDirective} from "./color-pattern/pattern-generator.directive";
import {PositionPatternDirective} from "./position-pattern/position-pattern.directive";
import {GridPatternDirective} from "./grid-pattern/grid-pattern.directive";
import {CuboidComponent} from './components/cuboid/cuboid.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PatternGeneratorDirective,
    PositionPatternDirective,
    GridPatternDirective,
    CuboidComponent,
  ],
  exports: [
    PatternGeneratorDirective,
    PositionPatternDirective,
    GridPatternDirective,
    CuboidComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ]
})
export class InstrumentModule {
}
