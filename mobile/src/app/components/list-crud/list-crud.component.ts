import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-crud',
  templateUrl: './list-crud.component.html',
  styleUrls: ['./list-crud.component.scss'],
})
export class ListCrudComponent implements OnInit {

  @Input() 
  products: Product[];

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private productService: ProductService,
  ) { }

  ngOnInit() {}

  edit(id: number): void {
    this.router.navigate([`${this.router.url}/edit/${id}`]);
  }

  async delete(id: number) {
    this.router.navigate([`${this.router.url}/delete/${id}`]);
  }

}
