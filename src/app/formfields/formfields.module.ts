import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddNewComponent} from "./field-add-new/add-new.component";
import {HttpClientModule} from "@angular/common/http";
import {FieldListComponent} from "./field-list/field-list.component";
import {FieldItemComponent} from "./field-item/field-item.component";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModalComponent} from "./modal/modal.component";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [
    AddNewComponent,
    FieldListComponent,
    FieldItemComponent,
    ModalComponent


  ],
  exports: [
    AddNewComponent,
    FieldListComponent,
    FieldItemComponent


  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class FormfieldsModule { }
