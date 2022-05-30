import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourmillionPageRoutingModule } from './fourmillion-routing.module';

import { FourmillionPage } from './fourmillion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FourmillionPageRoutingModule
  ],
  declarations: [FourmillionPage]
})
export class FourmillionPageModule {}
