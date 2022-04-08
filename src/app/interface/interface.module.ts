import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface.component';



@NgModule({
  declarations: [
    InterfaceComponent
  ],
  exports: [
    InterfaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InterfaceModule { }
