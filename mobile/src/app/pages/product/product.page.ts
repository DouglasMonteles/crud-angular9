import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.productService.findAll().subscribe({
      next: (data) => {
        this.products = data;
      },

      error: (error) => this.productService.showMessage('Erro', 'Ocorreu um erro na requisição. Tente novamente.', true),
    });
  }

  voltar(): void {
    this.router.navigateByUrl('/products');
  }

}
