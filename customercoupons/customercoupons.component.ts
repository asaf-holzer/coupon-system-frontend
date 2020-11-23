import { CustomerService } from './../../services/customer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Coupon } from 'src/app/models/Coupon';
import { Customer } from 'src/app/models/Customer';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { CouponComponent } from '../coupon/coupon.component';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-customercoupons',
  templateUrl: './customercoupons.component.html',
  styleUrls: ['./customercoupons.component.css']
})
export class CustomercouponsComponent implements OnInit {

  public coupons = [];
  public couponID: number;
  public coupon: Coupon;
  
  public constructor(private customerService: CustomerService,private couponService: CouponService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getCustomerCoupons().subscribe(
      (res) => {
        this.coupons = res;
        console.log(res);
        this.dataSource = new MatTableDataSource<Customer>(this.coupons);
      },
      (err) => { alert(err.error) });
  }

  displayedColumns: string[] = ['id', 'category', 'title','startDate','endDate','price','image','zoomIn'];
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
