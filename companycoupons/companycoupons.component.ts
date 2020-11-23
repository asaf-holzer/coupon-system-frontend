import { CouponComponent } from './../coupon/coupon.component';
import { CouponService } from './../../services/coupon.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MAT_FORM_FIELD } from '@angular/material/form-field';
import { from } from 'rxjs';
import { CompanyService } from 'src/app/services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NgForOf } from '@angular/common';
import { Coupon } from '../../models/Coupon';
import { DialogBox4Component } from '../dialog-box4/dialog-box4.component';

@Component({
  selector: 'app-companycoupons',
  templateUrl: './companycoupons.component.html',
  styleUrls: ['./companycoupons.component.css']
})
export class CompanycouponsComponent implements OnInit {

  public coupons = [];
  public couponID: number;
  public coupon: Coupon;
  public constructor(private companyService: CompanyService, public dialog: MatDialog, private couponService: CouponService) { }

  ngOnInit(): void {
    this.companyService.getCompanyCoupons().subscribe(
      (res) => {
        this.coupons = res;
        console.log(res);
        this.dataSource = new MatTableDataSource<Company>(this.coupons);
      },
      (err) => { alert(err.error) });
  }

  displayedColumns: string[] = ['id', 'category', 'title','startDate','endDate','amount','price','image','update', 'delete', 'zoomIn'];
  dataSource = new MatTableDataSource(this.coupons);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  public addCoupon(obj): void {
    this.companyService.addCoupon(obj).subscribe(
      (res)=>{this.coupons.push(res),
        this.companyService.getCompanyCoupons().subscribe(
          (res) => {
            this.coupons = res;
            this.dataSource = new MatTableDataSource<Company>(this.coupons);
          },
          (err) => { alert(err.error) });},
      (err)=>{ alert(err.error) });
     
  }

  public deleteCoupon(obj): void {
    this.companyService.deleteCoupon(obj.id).subscribe(
      (res) => { this.couponID = res },
      (err) => { alert(err.error) });
    this.coupons = this.coupons.filter((value) => {
      return value.id != obj.id;
    });
    this.dataSource = new MatTableDataSource<Company>(this.coupons);
  }

  public updateCoupon(obj): void {

    this.companyService.updateCoupon(obj.id, obj).subscribe(
      (res) => {
        this.coupon = res,
        this.companyService.getCompanyCoupons().subscribe(
          (res) => {
            this.coupons = res;
            this.dataSource = new MatTableDataSource<Company>(this.coupons);
          },
          (err) => { alert(err.error) });
      },
      (err) => { alert(err.error) });


  }

  showOneCoupon(action, obj){
    obj.action = action;
    this.couponService.coupon=obj;
   this.dialog.open(CouponComponent, {
      width: '250px',
      height: '400px',
      data: obj
    });
    
  }
  /* ******************************************************************************************************* */
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;



  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBox4Component, {
      width: '300px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addCoupon(result.data);
      } else if (result.event == 'Update') {
        this.updateCoupon(result.data);
      } else if (result.event == 'Delete') {
        this.deleteCoupon(result.data);
      }
    });
  }


  
  /* addRowData(row_obj) {
    var d = new Date();
    this.coupons.push({
      id: row_obj.id,
      companyID: row_obj.companyID,
      category: row_obj.category,
      title: row_obj.title,
      description: row_obj.description,
      startDate: row_obj.startDate,
      endDate: row_obj.endDate,
      amount: row_obj.amount,
      price: row_obj.price,
      image: row_obj.image
      
    });
    this.table.renderRows();
    this.dataSource = new MatTableDataSource<Company>(this.coupons);

  }

 
  updateRowData(row_obj) {
    this.coupons = this.coupons.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.companyID = row_obj.companyID;
        value.category = row_obj.category;
        value.title = row_obj.title;
        value.description = row_obj.description;
        value.startDate = row_obj.startDate;
        value.endDate = row_obj.endDate;
        value.amount = row_obj.amount;
        value.price = row_obj.price;
        value.image = row_obj.image;
        
      }
      return true;
    });
    this.dataSource = new MatTableDataSource<Company>(this.coupons);
  }
  deleteRowData(row_obj) {
    this.coupons = this.coupons.filter((value, key) => {
      return value.id != row_obj.id;
    });
    this.dataSource = new MatTableDataSource<Company>(this.coupons);
  } */
}
