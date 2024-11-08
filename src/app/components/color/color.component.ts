import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  colors: Color[] = []
  dataLoaded = false;
  colorId: number | null = null;

  constructor(private colorService: ColorService, private http: HttpClient){
  }
  
  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
      this.dataLoaded = true;
    })
  }
}
