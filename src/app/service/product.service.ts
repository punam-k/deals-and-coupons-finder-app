import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ServiceUrl:string="http://localhost:3000/sree/items";

 

  constructor(private http:HttpClient) { }
  // addToOrder(cid,cname,cprice,cimg){
    
  //   let newOrder={id:cid,name:cname,price:cprice,imageurl:cimg};
  //   //alert(addCart.description);
  //   return this.http.post(this.ServiceUrl,newOrder);
  
  // }
  getItems():Observable<Item[]>{

    return this.http.get<Item[]>(this.ServiceUrl);
    
  }
}
