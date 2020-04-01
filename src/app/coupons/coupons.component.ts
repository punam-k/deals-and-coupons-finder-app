import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../service/coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
 
  
  deliverdooCouponsDetails:any;
  doordashCouponsDetails :any;
  swiggyCouponsDetails:any;
  uberCouponsDetails:any;
  zomatoCouponsDetails:any;

  constructor(private couponService : CouponsService) { }

  ngOnInit(): void {
    this.couponService.getDeliverdooCoupons().subscribe(data=>this.deliverdooCouponsDetails=data);
    
    this.couponService.getDoordashCoupons().subscribe(flight=>this.doordashCouponsDetails=flight);

    this.couponService.getSwiggyCoupons().subscribe(train=>this.swiggyCouponsDetails=train);

    this.couponService.getUberCoupons().subscribe(hotel=>this.uberCouponsDetails=hotel);

    this.couponService.getZomatoCoupons().subscribe(fashion=>this.zomatoCouponsDetails=fashion);
  }

 



}
