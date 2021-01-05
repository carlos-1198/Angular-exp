import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from '../../../core/services/products/products.service';
import { CustomValidator } from '../../../utils/customValidator';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  isFormEdit: boolean;
  id: string;
  image$: Observable<any>;
  method: string;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.isFormEdit = false;
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id != null){
        this.isFormEdit = true;
        this.id = params.id;
        this.productsService.getProduct(this.id)
        .subscribe(product => {
          this.form.patchValue(product);
        });
      }
    });
  }
  saveOrUpdate(event: Event){
    if (this.isFormEdit){
      return this.updateProduct(event);
    } else{
      this.saveProduct(event);
    }
  }

  saveProduct(event: Event){
    event.preventDefault(); // previene la recarga por defecto al enviar un formulario
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['/admin/products']);
      });
    }
  }

  updateProduct(event: Event){
    event.preventDefault(); // previene la recarga por defecto al enviar un formulario
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['/admin/products']);
      });
    }
  }

  uploadFile(event){
    const file = event.target.files[0];
    const name = file.name; // nombre con el q se guarda en firebase.
    const fileRef = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file); // se crea la tarea de subir el archivo

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    ).subscribe();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidator.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }
}
