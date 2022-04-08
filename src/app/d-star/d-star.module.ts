import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DStarComponent} from './d-star.component';
import {WeaponsModule} from "./weapons/weapons.module";


@NgModule({
  declarations: [
    DStarComponent,
  ],
  exports: [
    DStarComponent
  ],
  imports: [
    CommonModule,
    WeaponsModule
  ]
})
export class DStarModule {
}
