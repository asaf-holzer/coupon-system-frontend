import { Injectable } from '@angular/core';
import { UpdateCompanyFormComponent } from './../components/update-company-form/update-company-form.component';
import { Company } from './../models/Company';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './../models/Customer';
import { Coupon } from '../models/Coupon';
import { Category } from '../models/Category';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public category:Category;
  public maxPrice: number;
  public toSortCat: boolean;
  public toSortMax: boolean;
  public constructor(private httpClient: HttpClient, private tokenService:TokenService) { }

  
  public addCoupon(coupon: Coupon): Observable<Coupon>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.post<any>('http://localhost:8080/company/add-coupon'+"?token="+this.tokenService.token, coupon, options);
   }

   public updateCoupon(id: number, coupon: Coupon): Observable<Coupon>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
    const options = {headers:headers};
    return this.httpClient.put<any>('http://localhost:8080/company/update-coupon/'+id+"?token="+this.tokenService.token, coupon, options);
   }

   public deleteCoupon(id: number): Observable<number>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
    const options = {headers:headers};
    return this.httpClient.delete<number>('http://localhost:8080/company/delete-coupon/'+id+"?token="+this.tokenService.token, options);
   }

   public getCompanyCoupons(): Observable<Coupon[]>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
    const options = {headers:headers};
    return this.httpClient.get<Coupon[]>('http://localhost:8080/company/get-company-coupons'+"?token="+this.tokenService.token, options);
  }

  public getCompanyCouponsCategory(category: Category): Observable<Coupon[]>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.get<Coupon[]>('http://localhost:8080/company/get-company-coupons-category/'+category+"?token="+this.tokenService.token, options);
  }

  public getCompanyCouponsMaxPrice(maxPrice: number): Observable<Coupon[]>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.get<Coupon[]>('http://localhost:8080/company/get-company-coupons-max-price/'+maxPrice+"?token="+this.tokenService.token, options);
  }

  public getCompanyDetails(): Observable<any>{
    const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
    return this.httpClient.get<any>('http://localhost:8080/company/get-company-details'+"?token="+this.tokenService.token, options);
  }

 
  
 
 
 







  getCompanyCouponsgetCompanyCouponsMaxPrice(maxPrice: number) {
    throw new Error('Method not implemented.');
  }

}
