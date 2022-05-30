import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImllionsharePageRoutingModule } from './imllionshare-routing.module';

import { ImllionsharePage } from './imllionshare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImllionsharePageRoutingModule
  ],
  declarations: [ImllionsharePage]
})
export class ImllionsharePageModule {}
