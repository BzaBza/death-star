import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExplosionComponent} from "./explosion/explosion.component";
import {CraterComponent} from "./crater/crater.component";
import {MushroomCloudComponent} from "./mushroom-cloud/mushroom-cloud.component";
import {DestructionEffectComponent} from "./destruction-effect.component";
import {InstrumentModule} from "../../../instrument/instrunet.module";

@NgModule({
  declarations: [
    DestructionEffectComponent,
    ExplosionComponent,
    CraterComponent,
    MushroomCloudComponent,
  ],
  exports: [
    DestructionEffectComponent
  ],
  imports: [
    CommonModule,
    InstrumentModule,
  ]
})
export class DestructionEffectModule {
}
