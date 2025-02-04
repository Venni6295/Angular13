import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {
  }

  public saveProduct(products: { Name: string, Model: string, Price: string }) {
    this._http.post('https://angular-api-7aef5-default-rtdb.firebaseio.com/products.json', products)
      .subscribe((result) => {
        console.log(result);
      });
  }

  public getProduct() {
    this._http.get('https://angular-api-7aef5-default-rtdb.firebaseio.com/products.json')
      .subscribe((products) => {
        console.log(products);
      });
  }
}
