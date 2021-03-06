import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';
import { ProductEditPage } from '../product-edit/product-edit.page';
import { ProductDeletePage } from '../product-delete/product-delete.page';
import { ProductCreatePage } from '../product-create/product-create.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPage,
  },

  {
    path: 'create',
    component: ProductCreatePage,
  },

  {
    path: 'edit/:id',
    component: ProductEditPage,
  },

  {
    path: 'delete/:id',
    component: ProductDeletePage,
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
