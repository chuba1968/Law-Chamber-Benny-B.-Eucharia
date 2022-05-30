import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedtwomillionPageRoutingModule } from './proceedtwomillion-routing.module';

import { ProceedtwomillionPage } from './proceedtwomillion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedtwomillionPageRoutingModule
  ],
  declarations: [ProceedtwomillionPage]
})
export class ProceedtwomillionPageModule {}
