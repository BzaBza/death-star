import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpaceBackgroundComponent} from './space-background/space-background.component';
import {InstrumentModule} from "../../../instrument/instrunet.module";

@NgModule({
  declarations: [
    SpaceBackgroundComponent,
  ],
  exports: [
    SpaceBackgroundComponent,
  ],
  imports: [
    CommonModule,
    InstrumentModule
  ]
})
export class SpaceModule {
}
