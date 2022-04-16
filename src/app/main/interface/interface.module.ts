import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface.component';
import { WeaponSettingsComponent } from './weapon-settings/weapon-settings.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component';



@NgModule({
  declarations: [
    InterfaceComponent,
    WeaponSettingsComponent,
    PlanetInfoComponent,
  ],
  exports: [
    InterfaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InterfaceModule { }
