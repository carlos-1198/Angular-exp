import { Component, OnInit } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CartService } from '../../../core/services/cart/cart.service';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faCartArrowDown = faCartArrowDown;
  totalProducts$: Observable<number>;
  isAdmin$: Observable<boolean>;
  constructor(
    private cartService: CartService,
    private authService: AuthService,
  ) {
      this.totalProducts$ = this.cartService.cart$.pipe(
        map(products => products.length)
      );
      this.isLogin();
      console.log(this.isAdmin$); // _isScalar es la propiedad que tiene el boolean (lo vi con el console)
    }

  ngOnInit(): void { }

  isLogin(){
    console.log(this.authService.hasUser());
    this.isAdmin$ = this.authService.hasUser().pipe(
      map(user => user === null ? false : true)
      );
  }
}
