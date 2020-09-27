import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: ProductModel = {
    name: '',
    price: 0.00,
  };

  constructor(
    private productService: ProductService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product)
      .subscribe({
        next: (data) => {
          this.productService.showMessage('Produto criado!');
          this.router.navigate(['/products']);
        },

        error: (error) => {
          this.productService.showMessage('Erro ao cadastrar produto! Tente novamente.')
        }
      });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
