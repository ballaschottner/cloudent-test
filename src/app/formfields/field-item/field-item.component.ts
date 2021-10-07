import {Component, Input, OnInit} from '@angular/core';
import {Field} from "../../service/fields/field.interface";


@Component({
  selector: 'app-field-item',
  templateUrl: './field-item.component.html',
  styleUrls: ['./field-item.component.css']
})
export class FieldItemComponent implements OnInit {
  @Input() field!: Field

  constructor() {
  }

  ngOnInit(): void {
  }

}
