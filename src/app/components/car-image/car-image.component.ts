import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImage.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent {
  carImages: CarImage[] = []
  dataLoaded = false;
  carImageId: number | null = null;

  constructor(private carImageService: CarImageService, private http: HttpClient){
  }
  
  ngOnInit(): void {
    this.getCarImages()
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response => {
      this.carImages = response.data
      this.dataLoaded = true;
    })
  }
}
