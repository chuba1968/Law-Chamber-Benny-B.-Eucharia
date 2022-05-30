import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PowerofattorneyPageRoutingModule } from './powerofattorney-routing.module';

import { PowerofattorneyPage } from './powerofattorney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PowerofattorneyPageRoutingModule
  ],
  declarations: [PowerofattorneyPage]
})
export class PowerofattorneyPageModule {}
