import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceBackgroundComponent } from './space-background/space-background.component';
import { PlanetComponent } from './planet/planet.component';



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
    CommonModule
  ]
})
export class SpaceModule { }
