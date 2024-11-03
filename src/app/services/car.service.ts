import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44384/api/cars/getall"
  detailsUrl = "https://localhost:44384/api/cars/getcardetails"

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.detailsUrl);
  }
}
