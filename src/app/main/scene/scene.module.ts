import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpaceModule} from "./space/space.module";
import { SceneComponent } from './scene.component';
import {PlanetModule} from "../planet/planet.module";

@NgModule({
  declarations: [
    SceneComponent
  ],
  exports: [
    SceneComponent
  ],
  imports: [
    CommonModule,
    SpaceModule,
    PlanetModule
  ]
})
export class SceneModule { }
