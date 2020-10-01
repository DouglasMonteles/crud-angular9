import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CrudComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CrudComponent,
  ]
})
export class CrudModule { }
