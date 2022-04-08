import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {InterfaceModule} from "./interface/interface.module";
import {DStarModule} from "./d-star/d-star.module";
import {SceneModule} from "./scene/scene.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterfaceModule,
    DStarModule,
    SceneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
