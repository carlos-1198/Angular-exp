import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../../../core/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faCartArrowDown = faCartArrowDown;
  totalProducts$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
      this.totalProducts$ = this.cartService.cart$.pipe(
        map(products => products.length)
      );
    }

  ngOnInit(): void {
  }

}
