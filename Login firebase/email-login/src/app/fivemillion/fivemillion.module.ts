import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FivemillionPageRoutingModule } from './fivemillion-routing.module';

import { FivemillionPage } from './fivemillion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivemillionPageRoutingModule
  ],
  declarations: [FivemillionPage]
})
export class FivemillionPageModule {}
