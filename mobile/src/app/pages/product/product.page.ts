import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.load();
  }

  ionViewWillEnter() {
    this.load();
  }

  async load() {
    await this.productService.findAll().subscribe({
      next: (data) => {
        this.products = data;
      },

      error: (error) => this.productService.showMessage('Erro', 'Ocorreu um erro na requisição. Tente novamente.', true),
    });
  }

  create(product: Product): void {
    this.productService.create(product).subscribe({
      next: (data) => {
        this.productService.showMessage('Sucesso', 'Produto inserido');
      },

      error: (error) => {
        this.productService.showMessage('Error', 'Erro ao inserir', true);
      }
    });

    this.voltar();
  }

  voltar(): void {
    this.router.navigateByUrl('/products');
  }

}
