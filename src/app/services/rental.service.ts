import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Rental } from '../models/rental';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44384/api/rentals/getall"
  detailsUrl = "https://localhost:44384/api/rentals/getrentaldetails"
  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }

  getRentalDetails(): Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.detailsUrl);
  }
}
