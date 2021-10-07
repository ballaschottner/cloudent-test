import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddNewComponent} from "./field-add-new/add-new.component";
import {FieldItemComponent} from "./field-item/field-item.component";

import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AddNewComponent,


  ],
  exports: [
    AddNewComponent,


  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class FormfieldsModule { }
