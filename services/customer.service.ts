import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { Coupon } from '../models/Coupon';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 

  public category:Category;
  public maxPrice: number;
  public toSortCat: boolean;
  public toSortMax: boolean;
  public constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  public purchaseCoupon(coupon: Coupon): Observable<Coupon>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.post<any>('http://localhost:8080/customer/purchase-coupon'+"?token="+this.tokenService.token, coupon, options);
  }

   public getCustomerCoupons(): Observable<Coupon[]>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
    const options = {headers:headers};
    return this.httpClient.get<Coupon[]>('http://localhost:8080/customer/get-customer-coupons'+"?token="+this.tokenService.token, options);
  }

  public getCustomerCouponsCategory(category: Category): Observable<Coupon[]>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.get<Coupon[]>('http://localhost:8080/customer/get-customer-coupons-category/'+category+"?token="+this.tokenService.token, options);
  }

  public getCustomerCouponsMaxPrice(maxPrice: number): Observable<Coupon[]>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.get<Coupon[]>('http://localhost:8080/customer/get-customer-coupons-max-price/'+maxPrice+"?token="+this.tokenService.token, options);
  }

  public getCustomerDetails(): Observable<any>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.get<any>('http://localhost:8080/customer/get-customer-details'+"?token="+this.tokenService.token, options);
  }

  public getAllCoupons(): Observable<Coupon[]>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.get<Coupon[]>('http://localhost:8080/customer/get-all-coupons'+"?token="+this.tokenService.token, options);
  }




  getCompanyCoupons() {
    throw new Error('Method not implemented.');
  }
  addCoupon(obj: any) {
    throw new Error('Method not implemented.');
  }
}
