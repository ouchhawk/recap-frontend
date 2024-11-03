import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  cars: Car[] = []
  carDetails: CarDetail[] = []
  dataLoaded = false;
  carId: number | null = null;

  constructor(private carService: CarService, private http: HttpClient){
  }
  
  ngOnInit(): void {
    this.getCarDetails()
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }


}
