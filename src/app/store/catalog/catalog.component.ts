import { ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from "src/app/model/cart.service";
import { CatalogService } from "src/app/model/catalog.service";
import { CompositeProduct, SimpleProduct, SKU } from "src/app/model/product.model";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit {

  activeProduct: SimpleProduct | CompositeProduct | undefined;

  products$!: Observable<SimpleProduct[] & CompositeProduct[]>;

  constructor(private catalogService: CatalogService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.catalogService.getProducts();
  }

  addProductToCart(product: SimpleProduct | CompositeProduct | SKU) {
    this.cartService.addLine(product);
  }

  onSelectItem(product: SimpleProduct | CompositeProduct) {
    if (this.activeProduct?.ID === product.ID) {
      this.activeProduct = undefined;
    } else {
      this.activeProduct = product;
    }
  }

}
