import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceBackgroundComponent } from './space-background/space-background.component';
import { PlanetComponent } from './planet/planet.component';
import {InstrumentModule} from "../../instrument/instrunet.module";



@NgModule({
  declarations: [
    SpaceBackgroundComponent,
    PlanetComponent
  ],
  exports: [
    SpaceBackgroundComponent,
    PlanetComponent
  ],
    imports: [
        CommonModule,
        InstrumentModule
    ]
})
export class SpaceModule { }
