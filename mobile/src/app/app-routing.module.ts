import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/menu-tab/menu-tab.module').then( m => m.MenuTabPageModule)
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./pages/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
