import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {
  coupons : Object=[
    {
      "image" : "../../assets/images/kids1.jpg",
      "heading" : "Prime Deals",
      "offer": "Kids Offer- Free Meals for Children ",
      "detailsInfo" : "Min 25% off at the hottest premium restaurants",
      
    },
    {
      "image" : "../../assets/images/best-food.jpg",
      "heading" : "50% OFF",
      "offer": "Food At best offers on Orders | All users",
      "detailsInfo" : "Mindblowing 50% off deals in your city",
    },
    {
      "image" : "../../assets/images/drinks.jpg",
      "heading" : "20% OFF on drinks",
      "offer": "Flat 20% OFF On Orders | All users",
      "detailsInfo" : "Enjoy flat 50% off on drinks and sweets",
      
    },
    {
      "image" : "../../assets/images/best-food.jpg",
      "heading" : "50% OFF",
      "offer": "Food At best offers on Orders | All users",
      "detailsInfo" : "Mindblowing 50% off deals in your city",
    },
    {
      "image" : "../../assets/images/drinks.jpg",
      "heading" : "20% OFF on drinks",
      "offer": "Flat 20% OFF On Orders | All users",
      "detailsInfo" : "Enjoy flat 50% off on drinks and sweets",
      
    },
    {
      "image" : "../../assets/images/kids1.jpg",
      "heading" : "Prime Deals",
      "offer": "Kids Offer- Free Meals for Children ",
      "detailsInfo" : "Minimum 25% off at the hottest and most premium restaurants",
      
    },
 
  
  ];

  

  constructor() {
  
   }

  ngOnInit(): void {
  }


}
