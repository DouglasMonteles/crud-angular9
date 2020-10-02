import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { ListCrudModule } from 'src/app/components/list-crud/list-crud.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCrudModule,
    ProductPageRoutingModule
  ],
  declarations: [ProductPage]
})
export class ProductPageModule {}
