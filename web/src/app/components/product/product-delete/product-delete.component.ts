import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: ProductModel = {
    id: 0,
    name: '',
    price: 0.0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,  
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productService.readById(id)
      .subscribe({
        next: (data) => {
          this.product = data;
        },

        error: (error) => {
          console.log(error);
        }
      });
  }

  deleteProduct(): void {
    const id = String(this.product.id);
    this.productService.delete(id)
      .subscribe({
        next: (data) => {
          this.productService.showMessage('Produto excluido!');
          this.router.navigate(['/products']);
        },

        error: (error) => {
          console.log(error);
        }
      });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
