import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/service/product.service';
import { Item } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  item:Item[];

  
  constructor(private itemService:ProductService,private router:Router,private cartservice:CartService,private toastrservice:ToastrService) { 

   
  
  }
 
  getItemsFromService(){
    this.itemService.getItems().subscribe((response)=>{
      this.item=response;
      console.log(this.item);
    })
  }
  ngOnInit(): void {
    this.getItemsFromService();
  }
  addcart(selecteditem){
 
  this.cartservice.addToCart(selecteditem).subscribe((response)=>{
    console.log("value:",response);
    this.router.navigate(['/cart']) ;
   this.showSuccess()
  })
  }
  showSuccess() {
    this.toastrservice.success('successfully item added to cart');
  }

}
