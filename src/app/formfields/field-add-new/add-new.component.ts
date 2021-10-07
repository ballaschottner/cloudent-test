import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddNew() {
    console.log('Add new clicked!')
  }
}
