import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";
import { CompositeProduct, SimpleProduct } from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<SimpleProduct[] & CompositeProduct[]> {
    return this.http.get<any>('/products').pipe(
      map((products: any) => {
        return products.map((product: any) => {
          if (typeof product.PRICE !== 'undefined' && typeof product.SKU == 'undefined') {
            return product as SimpleProduct;
          } else {
            let sku = [];
            for(let value of Object.entries(product.SKU)){
              sku.push(value[1]);
            }
            product.SKU = sku;
            return product as CompositeProduct;
          }
        })
      }),
      delay(2000) //имитация запроса с сервера
    );
  }
}
