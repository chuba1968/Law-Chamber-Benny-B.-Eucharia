import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedthreemillionPageRoutingModule } from './proceedthreemillion-routing.module';

import { ProceedthreemillionPage } from './proceedthreemillion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedthreemillionPageRoutingModule
  ],
  declarations: [ProceedthreemillionPage]
})
export class ProceedthreemillionPageModule {}
