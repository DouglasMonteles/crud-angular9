import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: ProductModel[];
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read()
      .subscribe({
        next: (data) => {
          this.products = data;
        },

        error: (error) => {
          console.log(error);
        }
      });
  }

}
