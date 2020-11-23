import { CouponService } from './../../services/coupon.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Coupon } from 'src/app/models/Coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {


  public constructor(private couponService: CouponService ) { }

 /*  public companyID: number;
  public category: Category;
  public title: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;
  public amount: number;
  public price: number;
  public image: string; */

  public coupon: Coupon;

 
  ngOnInit(): void {
    this.coupon=this.couponService.coupon;
    
  }

}
