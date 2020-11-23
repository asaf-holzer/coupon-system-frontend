
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public flag:boolean;
  public toLogout: boolean;

  constructor(private httpClient:HttpClient) { }

  public login(email:string, password:string, clientType:string): Observable<any> {
    return this.httpClient.post<any>
    ("http://localhost:8080/loginManager/login?email="+email+"&password="+password+"&clientType="+clientType ,null,{observe: 'response', withCredentials: true });
  }    
  
  public logout(token: string) :Observable<any>{
    console.log(token);
    return this.httpClient.delete<any>
    ("http://localhost:8080/loginManager/logout?token="+token, {observe: 'response', withCredentials: true });
  }

  /* public loginCompany(email:string, password:string): Observable<any> {
    return this.httpClient.post<any>
    (this.url+"company/login?email="+email+"&password="+password,null,{observe: 'response', withCredentials: true });
  }

  public loginCustomer(email:string, password:string): Observable<any> {
    return this.httpClient.post<any>
    (this.url+"customer/login?email="+email+"&password="+password,null,{observe: 'response', withCredentials: true });
  }

  public loginAdmin(email:string, password:string): Observable<any> {
    return this.httpClient.post<any>
    (this.url+"admin/login?email="+email+"&password="+password,null,{observe: 'response', withCredentials: true });
  } */

}
