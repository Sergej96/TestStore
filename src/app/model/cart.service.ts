import { Injectable } from "@angular/core";
import { CompositeProduct, SimpleProduct, SKU } from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(product: SimpleProduct | CompositeProduct | SKU, quantity: number = 1) {
    let line = this.lines.find(l => l.product.ID == product.ID)
    if (line) {
      line.quantity++;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: SimpleProduct | CompositeProduct | SKU, quantity: number) {
    let line = this.lines.find(l => l.product.ID == product.ID)
    if (line) {
      line.quantity = quantity;
    }
    this.recalculate();
  }

  removeLine(id: number) {
    let index = this.lines.findIndex(l => l.product.ID == id);
    this.lines.splice(index,1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(l => {
      this.itemCount += Number(l.quantity);
      if (typeof l.product?.PRICE !== 'undefined'){
        this.cartPrice += l.quantity * l.product?.PRICE!;
      }
    })
  }
}

export class CartLine {
  constructor(public product: SimpleProduct | CompositeProduct |SKU, public quantity: number) { }

  get lineTotal(): number {
    return this.quantity * this.product?.PRICE!;
  }
}
