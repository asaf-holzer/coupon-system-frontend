import { TokenService } from './token.service';
import { UpdateCompanyFormComponent } from './../components/update-company-form/update-company-form.component';
import { Company } from './../models/Company';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public idCompany: number;
  public idCustomer:number;

 public constructor(private httpClient: HttpClient , private tokenService:TokenService) {}

 public getAllCompanies(): Observable<Company[]>{
   const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
   return this.httpClient.get<Company[]>('http://localhost:8080/admin/get-all-companies?token='+this.tokenService.token, options);
 }

 public deleteCompany(id: number): Observable<number>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
  const options = {headers:headers};
  return this.httpClient.delete<number>('http://localhost:8080/admin/delete-company/'+id+"?token="+this.tokenService.token, options);
 }

 public updateCompany(id: number, company: Company): Observable<Company>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
  const options = {headers:headers};
  return this.httpClient.put<any>('http://localhost:8080/admin/update-company/'+id+"?token="+this.tokenService.token, company, options);
 }

 public addCompany(company: Company): Observable<Company>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
  const options = {headers:headers};
  return this.httpClient.post<any>('http://localhost:8080/admin/add-company'+"?token="+this.tokenService.token, company, options);
 }

 public getOneCompany(idCompany: number): Observable<any>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
  const options = {headers:headers};
   return this.httpClient.get<any>('http://localhost:8080/admin/get-one-company/'+idCompany+"?token="+this.tokenService.token, options);
 }

 public getAllCustomers(): Observable<Company[]>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
  const options = {headers:headers};
  return this.httpClient.get<Company[]>('http://localhost:8080/admin/get-all-customers'+"?token="+this.tokenService.token, options);
}

public deleteCustomer(id: number): Observable<number>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
   const options = {headers:headers};
  return this.httpClient.delete<number>('http://localhost:8080/admin/delete-customer/'+id+"?token="+this.tokenService.token, options);
 }

 public updateCustomer(id: number, customer: Customer): Observable<Customer>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
  const options = {headers:headers};
  return this.httpClient.put<any>('http://localhost:8080/admin/update-customer/'+id+"?token="+this.tokenService.token, customer, options);
 }

 public addCustomer(customer: Customer): Observable<Customer>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
  const options = {headers:headers};
  return this.httpClient.post<any>('http://localhost:8080/admin/add-customer'+"?token="+this.tokenService.token, customer, options);
 }

 public getOneCustomer(idCustomer: number): Observable<any>{
  const headers = new HttpHeaders({'Authorization' : this.tokenService.token});
  const options = {headers:headers};
  return this.httpClient.get<any>('http://localhost:8080/admin/get-one-customer/'+idCustomer+"?token="+this.tokenService.token, options);
}
}
