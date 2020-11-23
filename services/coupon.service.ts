import { Injectable } from '@angular/core';
import { Coupon } from '../models/Coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

public coupon:Coupon;



  constructor() { }
}
