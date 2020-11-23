import { CouponService } from './../../services/coupon.service';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Coupon } from '../../models/Coupon';
import { DialogBox4Component } from '../dialog-box4/dialog-box4.component';
import { DialogBox3Component } from '../dialog-box3/dialog-box3.component';
import { CouponComponent } from '../coupon/coupon.component';

@Component({
  selector: 'app-all-coupons',
  templateUrl: './all-coupons.component.html',
  styleUrls: ['./all-coupons.component.css']
})
export class AllCouponsComponent implements OnInit {

  public constructor(private customerService: CustomerService,private couponService: CouponService, public dialog: MatDialog) { }

  public coupons = [];
  public couponID: number;
  public coupon: Coupon;

  ngOnInit(): void {
    this.customerService.getAllCoupons().subscribe(
      (res) => {
        this.coupons = res;
        console.log(res);
        this.dataSource = new MatTableDataSource<Company>(this.coupons);
      },
      (err) => { alert(err.error) });
  }



  displayedColumns: string[] = ['id', 'companyID', 'category', 'title', 'description', 'startDate', 'endDate', 'amount', 'price', 'image', 'purchase','zoomIn'];
  dataSource = new MatTableDataSource(this.coupons);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  public purchaseCoupon(obj) {
    this.customerService.purchaseCoupon(obj).subscribe(
      (res) => { this.customerService.purchaseCoupon(res),this.ngOnInit() },
      (err)=>{alert(err.error)});
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
    const dialogRef = this.dialog.open(DialogBox3Component, {
      width: '300px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {

      this.purchaseCoupon(result.data);
      console.log(result.data + ' purchase test!!!!');

    });
  }



}



