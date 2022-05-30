import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgwillservicesPageRoutingModule } from './lodgwillservices-routing.module';

import { LodgwillservicesPage } from './lodgwillservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgwillservicesPageRoutingModule
  ],
  declarations: [LodgwillservicesPage]
})
export class LodgwillservicesPageModule {}
