import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers: Customer[] = []
  dataLoaded = false;
  customerId: number | null = null;

  constructor(private customerService: CustomerService, private http: HttpClient){
  }
  
  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data
      this.dataLoaded = true;
    })
  }
}
