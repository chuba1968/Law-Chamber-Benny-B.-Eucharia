import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectionpetPageRoutingModule } from './electionpet-routing.module';

import { ElectionpetPage } from './electionpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectionpetPageRoutingModule
  ],
  declarations: [ElectionpetPage]
})
export class ElectionpetPageModule {}
