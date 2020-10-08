import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-crud',
  templateUrl: './list-crud.component.html',
  styleUrls: ['./list-crud.component.scss'],
})
export class ListCrudComponent implements OnInit {

  @Input() 
  products: Product[];

  constructor(private router: Router) { }

  ngOnInit() {}

  edit(id: number): void {
    this.router.navigate([`${this.router.url}/edit/${id}`]);
  }

  delete(id: number): void {
    this.router.navigate([`${this.router.url}/delete/${id}`]);
  }

}
