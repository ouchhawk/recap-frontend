import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  selectedFile: File | null = null;
  carId: number | null = null;
  uploadUrl = 'https://localhost:44384/api/CarImages/add'; // Replace with actual API URL

  constructor(private http: HttpClient){
  }
  
  ngOnInit(): void {
  }
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  
  uploadImage(): void {
    if (this.carId == null || !this.selectedFile) {
      alert('Please provide both Car ID and an image file.');
      return;
    }

    const formData = new FormData();
    formData.append('carImage.CarId', this.carId.toString());
    formData.append('file', this.selectedFile);
    formData.append('carImage.ImagePath', 'placeholder'); // Temporary value

    this.http.post(this.uploadUrl, formData).subscribe({
      next: (response) => {
        console.log('Upload successful', response);
        alert('Image uploaded successfully!');
      },
      error: (error: HttpErrorResponse) => {
        console.error('Upload failed', error);
        alert(`Upload failed: ${error.message}`);
      }
    });}
}
