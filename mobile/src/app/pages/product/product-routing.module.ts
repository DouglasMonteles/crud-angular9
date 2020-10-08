import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';
import { ProductEditPage } from '../product-edit/product-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPage,
  },

  {
    path: 'edit/:id',
    component: ProductEditPage,
  },

  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
