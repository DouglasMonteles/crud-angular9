import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDeletePage } from './product-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDeletePageRoutingModule {}
