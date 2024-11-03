import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarImage } from '../models/carImage';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:44384/api/carImages/getall"
  constructor(private httpClient: HttpClient) { }

  getCarImages(): Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
  }
}
