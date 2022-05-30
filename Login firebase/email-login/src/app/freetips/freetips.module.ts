import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreetipsPageRoutingModule } from './freetips-routing.module';

import { FreetipsPage } from './freetips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreetipsPageRoutingModule
  ],
  declarations: [FreetipsPage]
})
export class FreetipsPageModule {}
