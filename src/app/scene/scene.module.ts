import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpaceModule} from "./space/space.module";
import { SceneComponent } from './scene.component';



@NgModule({
  declarations: [
    SceneComponent
  ],
  exports: [
    SceneComponent
  ],
  imports: [
    CommonModule,
    SpaceModule
  ]
})
export class SceneModule { }
