import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  brands: Brand[] = []
  dataLoaded = false;
  brandId: number | null = null;

  constructor(private brandService: BrandService, private http: HttpClient){
  }
  
  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
      this.dataLoaded = true;
    })
  }
}
