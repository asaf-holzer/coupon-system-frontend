import { CouponService } from './../../services/coupon.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Coupon } from 'src/app/models/Coupon';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { CouponComponent } from '../coupon/coupon.component';

@Component({
  selector: 'app-customer-coupons-max',
  templateUrl: './customer-coupons-max.component.html',
  styleUrls: ['./customer-coupons-max.component.css']
})
export class CustomerCouponsMaxComponent implements OnInit {

  public coupons = [];
  public couponID: number;
  public coupon: Coupon;
  public maxPrice: number;
  public constructor(private customerService: CustomerService,private couponService:CouponService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.maxPrice=this.customerService.maxPrice;
    this.customerService.getCustomerCouponsMaxPrice(this.customerService.maxPrice).subscribe(
      (res) => {
        this.coupons = res;
        console.log(res);
        this.dataSource = new MatTableDataSource<Customer>(this.coupons);
      },
      (err) => { alert(err.error) });
  }

  displayedColumns: string[] = ['id', 'category', 'title','startDate','endDate','amount','price','image','zoomIn'];
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
