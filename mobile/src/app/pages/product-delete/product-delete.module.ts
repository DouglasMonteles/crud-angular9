import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDeletePageRoutingModule } from './product-delete-routing.module';

import { ProductDeletePage } from './product-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDeletePageRoutingModule
  ],
  declarations: [ProductDeletePage]
})
export class ProductDeletePageModule {}
