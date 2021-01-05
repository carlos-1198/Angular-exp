import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { Observable } from 'rxjs';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  }

}
