import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetComponent} from "./planet.component";
import {InstrumentModule} from "../../instrument/instrunet.module";
import {PlanetGridComponent} from "./planet-grid/planet-grid.component";
import {DestructionEffectModule} from "./destruction-effects/destruction-effect.module";

@NgModule({
  declarations: [
    PlanetComponent,
    PlanetGridComponent,
  ],
  exports: [
    PlanetComponent,
    PlanetGridComponent
  ],
  imports: [
    CommonModule,
    InstrumentModule,
    DestructionEffectModule
  ]
})
export class PlanetModule {
}
