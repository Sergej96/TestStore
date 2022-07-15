import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CartLine, CartService } from 'src/app/model/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements AfterViewChecked {

  constructor(public cart: CartService,
              private cdr: ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    this.cdr.markForCheck();
  }

  trackByLine(index:number,item:CartLine){
    return item.product.ID;
  }

}
