import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddNewComponent} from "./field-add-new/add-new.component";
import {HttpClientModule} from "@angular/common/http";
import {FieldListComponent} from "./field-list/field-list.component";
import {FieldItemComponent} from "./field-item/field-item.component";



@NgModule({
  declarations: [
    AddNewComponent,
    FieldListComponent,
    FieldItemComponent


  ],
  exports: [
    AddNewComponent,
    FieldListComponent,
    FieldItemComponent


  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class FormfieldsModule { }
