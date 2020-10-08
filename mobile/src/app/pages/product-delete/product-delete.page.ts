import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.page.html',
  styleUrls: ['./product-delete.page.scss'],
})
export class ProductDeletePage implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0.0,
  }

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

      error: (data) => {
        this.productService.showMessage('Error', 'Não foi possível excluir', true);
        this.voltar();
      }
    });
  }

  delete() {
    this.productService.delete(this.product.id).subscribe({
      next: (data) => {
        this.productService.showMessage('Sucesso', 'Exclusão efetuada com êxito');
        this.voltar();
      },

      error: (data) => {
        this.productService.showMessage('Error', 'Não foi possível excluir', true);
        this.voltar();
      }
    });
  }

  voltar(): void {
    this.router.navigateByUrl('products');
  }

}
