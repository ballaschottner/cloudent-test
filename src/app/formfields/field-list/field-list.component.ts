import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FieldsService} from "../../../service/fields/fields.service";
import {Field} from "../../../service/fields/field.interface";

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css']
})
export class FieldListComponent implements OnInit {
  fields!: Field[];

  constructor(private fieldsService: FieldsService) {
  }

  ngOnInit(): void {
    this.fieldsService.getFields()
      .subscribe(fields => {
        this.fields = fields;
        console.log('fields', fields)
      })
  }


}
