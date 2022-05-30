import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProbonoPageRoutingModule } from './probono-routing.module';

import { ProbonoPage } from './probono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProbonoPageRoutingModule
  ],
  declarations: [ProbonoPage]
})
export class ProbonoPageModule {}
