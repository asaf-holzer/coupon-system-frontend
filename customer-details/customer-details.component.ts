import { CustomerService } from 'src/app/services/customer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/Customer';
import {  CustomerDetails } from '../../models/CustomerDetails';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerDetails: CustomerDetails;
  customerDetail: Customer={ 
    id : undefined,
    firstName:undefined,
    lastName:undefined,
    email: undefined,
    password: undefined
  };
  customerDetailses=[];
  dataSource: MatTableDataSource<any>;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerDetails().subscribe(
      (res) => {
        this.customerDetails = res;
        
        this.customerDetail.id= this.customerDetails.id;
        this.customerDetail.firstName= this.customerDetails.firstName;
        console.log(this.customerDetails.firstName);
        this.customerDetail.lastName= this.customerDetails.lastName;
        console.log(this.customerDetails.lastName);
        this.customerDetail.email= this.customerDetails.email;
        this.customerDetail.password= this.customerDetails.password;
        this.customerDetailses=[];
        this.customerDetailses.push(this.customerDetail);
        this.dataSource = new MatTableDataSource<any>(this.customerDetailses);
      },
      (err) => { alert(err.error) });
  }

  displayedColumns: string[] = ['id', 'firstName','lastName', 'email', 'password'];
  
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
}
