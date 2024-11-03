import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {
  rentals: Rental[] = []
  rentalDetails: RentalDetail[] = []
  dataLoaded = false;
  rentalId: number | null = null;

  constructor(private rentalService: RentalService, private http: HttpClient){
  }
  
  ngOnInit(): void {
    this.getRentalDetails()
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response => {
      this.rentals = response.data
      this.dataLoaded = true;
    })
  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response => {
      this.rentalDetails = response.data
      this.dataLoaded = true;
    })
  }
}
