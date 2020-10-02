import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCrudComponent } from './list-crud.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ListCrudComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ListCrudComponent,
  ]
})
export class ListCrudModule { }
