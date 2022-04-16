import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeaponsComponent} from "./weapons.component";
import {MainWeaponComponent} from "./main-weapon/main-weapon.component";



@NgModule({
    declarations: [
        WeaponsComponent,
        MainWeaponComponent
    ],
    exports: [
        WeaponsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class WeaponsModule { }
