import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss'],
})
export class ProductCreatePage implements OnInit {

  product: Product = {
    name: '',
    price: 0.0,
  }

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  create() {
    this.productService.create(this.product).subscribe({
      next: (data) => {
        this.productService.showMessage('Sucesso', 'Produto criado');
        this.voltar();
      },

      error: (error) => {
        this.productService.showMessage('Error', 'Não foi possível criar o produto', true);
        this.voltar();
      }
    });
  }

  voltar(): void {
    this.router.navigateByUrl('products');
  }

}
