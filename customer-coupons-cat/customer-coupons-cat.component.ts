import { CouponService } from './../../services/coupon.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/Category';
import { Coupon } from 'src/app/models/Coupon';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponComponent } from '../coupon/coupon.component';
import { DialogBox4Component } from '../dialog-box4/dialog-box4.component';

@Component({
  selector: 'app-customer-coupons-cat',
  templateUrl: './customer-coupons-cat.component.html',
  styleUrls: ['./customer-coupons-cat.component.css']
})
export class CustomerCouponsCatComponent implements OnInit {

  public coupons = [];
  public couponID: number;
  public coupon: Coupon;
  public category: Category;
  public constructor(private customerService: CustomerService,private couponService: CouponService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.category=this.customerService.category;
    this.customerService.getCustomerCouponsCategory(this.customerService.category).subscribe(
      (res) => {
        this.coupons = res;
        console.log(res);
        this.dataSource = new MatTableDataSource<Customer>(this.coupons);
      },
      (err) => { alert(err.error) });
  }

  displayedColumns: string[] = ['id', 'category', 'title','startDate','endDate','amount','price','image', 'zoomIn'];
  dataSource = new MatTableDataSource(this.coupons);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
}
