import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      id: '007',
      price: 5000,
      description: 'Actualizado desde interfaz'
    };
    this.productsService.updateProduct('10', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe(product => {
      console.log(product);
    });
  }
}
