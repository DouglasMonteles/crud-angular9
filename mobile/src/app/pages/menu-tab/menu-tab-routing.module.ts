import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTabPage } from './menu-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTabPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },

      {
        path: 'products',
        loadChildren: () => import('../product/product.module').then(m => m.ProductPageModule),
      }
    ],
  },

  {
    path: '',
    component: MenuTabPage,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabPageRoutingModule {}
