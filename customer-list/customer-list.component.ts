import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/models/Company';
import { DialogBox2Component } from '../dialog-box2/dialog-box2.component';
import { Customer } from 'src/app/models/Customer';

import { MatTable,} from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MAT_FORM_FIELD } from '@angular/material/form-field';
import { from } from 'rxjs';

import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})


export class CustomerListComponent implements OnInit {

  public customers= [];
  public customerID: number;
  customer: Customer;
  public constructor(private adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(
      (res)=>{
        this.customers = res;
        console.log(res);
        this.dataSource = new MatTableDataSource<Company>(this.customers);
      },
      (err) => { alert(err.error) });
  }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'update', 'delete'];
  dataSource = new MatTableDataSource(this.customers);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public addCustomer(obj): void {
    this.adminService.addCustomer(obj).subscribe(
      (res)=>{this.customers.push(res),
        this.adminService.getAllCustomers().subscribe(
          (res) => {
            this.customers = res;
            this.dataSource = new MatTableDataSource<Company>(this.customers);
          },
          (err) => { alert(err.error) });},
      (err)=>{ alert(err.error), console.log(err.message+"  TEST TEST!!!!!!!!!!!"); });
     
  }

  public deleteCustomer(obj): void {
    this.adminService.deleteCustomer(obj.id).subscribe(
      (res) => { this.customerID = res },
      (err) => { alert(err.error) });
    this.customers = this.customers.filter((value) => {
      return value.id != obj.id;
    });
    this.dataSource = new MatTableDataSource<Company>(this.customers);
  }

  public updateCustomer(obj): void {

    this.adminService.updateCustomer(obj.id, obj).subscribe(
      (res) => {
        this.customer = res,
        this.adminService.getAllCustomers().subscribe(
          (res) => {
            this.customers = res;
            this.dataSource = new MatTableDataSource<Company>(this.customers);
          },
          (err) => { alert(err.error) });
      },
      (err) => { alert(err.error) });


  }
  /* ******************************************************************************************************* */
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;



  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBox2Component, 
      {
      width: '250px',
      data: obj
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addCustomer(result.data);
      } else if (result.event == 'Update') {
        this.updateCustomer(result.data);
      } else if (result.event == 'Delete') {
        this.deleteCustomer(result.data);
      }
    });
  }

  addRowData(row_obj) {
    var d = new Date();
    this.customers.push({
      id: row_obj.id,
      firstname: row_obj.firstname,
      lastname: row_obj.lastname,
      email: row_obj.email,
      password: row_obj.password
    });
    this.table.renderRows();
    this.dataSource = new MatTableDataSource<Customer>(this.customers);

  }
  updateRowData(row_obj) {
    this.customers = this.customers.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.firstname = row_obj.firstname;
        value.lastname = row_obj.lastname;
        value.email = row_obj.email;
        value.password = row_obj.password;
      }
      return true;
    });
    this.dataSource = new MatTableDataSource<Customer>(this.customers);
  }
  deleteRowData(row_obj) {
    this.customers = this.customers.filter((value, key) => {
      return value.id != row_obj.id;
    });
    this.dataSource = new MatTableDataSource<Customer>(this.customers);
  }
}
