import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Field} from "./field.interface";

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  static API_URL = "http://localhost:3000";
  static PATH = "/fields";

  constructor(private http: HttpClient) {
  }


  getFields(): Observable<Field[]> {
    return this.http.get<Field[]>(FieldsService.API_URL + FieldsService.PATH);
  }


}
