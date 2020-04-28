import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private http : HttpClient) { }
  deliverdooUri= "../../assets/all-coupons/deliverdoo.json"
  doordashUri = "../../assets/all-coupons/doordash.json"
  swiggyUri = "../../assets/all-coupons/swiggy.json"
  uberUri ="../../assets/all-coupons/uber.json"
  zomatoUri= "../../assets/all-coupons/zomato.json"


  getDeliverdooCoupons() {
    return this.http.get(this.deliverdooUri)
  }

  getDoordashCoupons(){
   return this.http.get(this.doordashUri) 
  }

  getSwiggyCoupons(){
    return this.http.get(this.swiggyUri)
  }

  getUberCoupons(){
    return this.http.get(this.uberUri)
  }

  getZomatoCoupons(){
    return this.http.get(this.zomatoUri)
  }

 

}


// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

// export class CouponsService {
  
//   baseUri:string = 'http://localhost:3000/api';
//   headers = new HttpHeaders().set('Content-Type', 'application/json');

//   constructor(private http: HttpClient) { }

//   // Create
//   createCoupon(data): Observable<any> {
//     let url = `${this.baseUri}/create-coupon`;
//     return this.http.post(url, data)
//       .pipe(
//         catchError(this.errorMgmt)
//       )
//   }

//   // Get all users
//   getCoupons() {
//     return this.http.get(`${this.baseUri}`);
//   }

//   // Get user
//   getCoupon(id): Observable<any> {
//     let url = `${this.baseUri}/read/${id}`;
//     return this.http.get(url, {headers: this.headers}).pipe(
//       map((res: Response) => {
//         return res || {}
//       }),
//       catchError(this.errorMgmt)
//     )
//   }

//   // Update user
//   updateCoupon(id, data): Observable<any> {
//     let url = `${this.baseUri}/update/${id}`;
//     return this.http.put(url, data, { headers: this.headers }).pipe(
//       catchError(this.errorMgmt)
//     )
//   }

//   // Delete user
//   deleteCoupon(id): Observable<any> {
//     let url = `${this.baseUri}/delete/${id}`;
//     return this.http.delete(url, { headers: this.headers }).pipe(
//       catchError(this.errorMgmt)
//     )
//   }

//   // Error handling 
//   errorMgmt(error: HttpErrorResponse) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//   }



  

// }