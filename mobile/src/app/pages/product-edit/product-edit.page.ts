import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0.0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.findById(id).subscribe({
      next: (data) => {
        this.product = data;
      },

      error: (error) => {
        this.productService.showMessage('Erro', 'Não foi possível carregar o produto', true);
      }
    });
  }

  update() {
    return this.productService.update(this.product).subscribe({
      next: (data) => {
        this.productService.showMessage('Sucesso', 'Produto alterado');
        this.voltar();
      },

      error: (error) => {
        this.productService.showMessage('Erro', 'Erro ao atualizar', true);
      }
    });
  }

  voltar(): void {
    this.router.navigateByUrl('products');
  }

}
