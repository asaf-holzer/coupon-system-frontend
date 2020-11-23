import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/models/Company';
import { Coupon } from 'src/app/models/Coupon';
import { CompanyService } from 'src/app/services/company.service';
import { CouponService } from 'src/app/services/coupon.service';
import { CouponComponent } from '../coupon/coupon.component';
import { DialogBox4Component } from '../dialog-box4/dialog-box4.component';

@Component({
  selector: 'app-company-coupons-max',
  templateUrl: './company-coupons-max.component.html',
  styleUrls: ['./company-coupons-max.component.css']
})
export class CompanyCouponsMaxComponent implements OnInit {
  public coupons = [];
  public couponID: number;
  public coupon: Coupon;
  public maxPrice:number;
  
 
  public constructor(private companyService: CompanyService, public dialog: MatDialog, private couponService: CouponService) { }
  ngOnInit(): void {
    this.maxPrice=this.companyService.maxPrice;
    this.companyService.getCompanyCouponsMaxPrice(this.companyService.maxPrice).subscribe(
      (res) => {
        this.coupons = res;
        console.log(res);
        this.dataSource = new MatTableDataSource<Company>(this.coupons);
      },
      (err) => { alert(err.error) });
  }

  displayedColumns: string[] = ['id', 'category', 'title','startDate','endDate','amount','price','image','update', 'delete','zoomIn'];
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