import { Coupon } from '../models/Coupon';

export class CustomerDetails{
    public constructor(
        public id?:number,
        public firstName?:string,
        public lastName?:string,
        public email?:string,
        public password?:string,
        public coupons?: Coupon[]){
    }
}