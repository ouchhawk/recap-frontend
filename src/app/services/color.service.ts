import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Color } from '../models/color';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44384/api/colors/getall"
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
