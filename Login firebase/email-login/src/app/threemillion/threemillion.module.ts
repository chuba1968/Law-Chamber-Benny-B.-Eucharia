import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreemillionPageRoutingModule } from './threemillion-routing.module';

import { ThreemillionPage } from './threemillion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreemillionPageRoutingModule
  ],
  declarations: [ThreemillionPage]
})
export class ThreemillionPageModule {}
