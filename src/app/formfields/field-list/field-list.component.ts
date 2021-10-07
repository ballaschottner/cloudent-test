import { Component, OnInit} from '@angular/core';
import {Field} from "../../service/fields/field.interface";
import {FieldsService} from "../../service/fields/fields.service";


@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  fields!: Field[];

  constructor(private fieldsService: FieldsService) {
  }

  ngOnInit(): void {
    this.fieldsService.getFields()
      .subscribe((fields) => {
        this.fields = fields;
        console.log('fields', fields)
      })
  }


}
