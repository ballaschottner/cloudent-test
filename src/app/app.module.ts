import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormfieldsComponent } from './formfields/formfields.component';
import {FormfieldsModule} from "./formfields/formfields.module";

@NgModule({
  declarations: [
    AppComponent,
    FormfieldsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormfieldsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
