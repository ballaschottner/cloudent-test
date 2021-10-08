import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {
  dialogRefProduct!: MatDialogRef<ModalComponent> | null;

  constructor(public dialog: MatDialog) {
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    this.dialogRefProduct = this.dialog.open(ModalComponent, dialogConfig);


    this.dialogRefProduct.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
