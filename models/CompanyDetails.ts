import { Coupon } from '../models/Coupon';
export class CompanyDetails{
    public constructor(
        public id?:number,
        public name?:string,
        public email?:string,
        public password?:string,
        public coupons?:Coupon[]){
    }
}