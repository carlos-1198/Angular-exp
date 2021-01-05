import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';
import { faTrashAlt, faEdit , faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faPlusCircle = faPlusCircle;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe(isDeleted => {
        console.log('Product deleted isDeleted =', isDeleted);
        if (isDeleted) {
          const index = this.products.findIndex(product => product.id === id);
          this.products.splice(index, 1);
          this.products = [...this.products];
        }
      });
    }
}
