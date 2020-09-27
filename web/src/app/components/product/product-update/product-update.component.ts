import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: ProductModel = {
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

  updateProduct(): void {
    this.productService.update(this.product)
      .subscribe({
        next: (data) => {
          this.productService.showMessage('Produto alterado!');
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
