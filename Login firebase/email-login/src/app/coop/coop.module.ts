import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoopPageRoutingModule } from './coop-routing.module';

import { CoopPage } from './coop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoopPageRoutingModule
  ],
  declarations: [CoopPage]
})
export class CoopPageModule {}
