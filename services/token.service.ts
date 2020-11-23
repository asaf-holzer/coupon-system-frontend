import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  public token: string;
  public printToken(){
    console.log("the token at token service: "+this.token);
  }
  constructor() { }
}
