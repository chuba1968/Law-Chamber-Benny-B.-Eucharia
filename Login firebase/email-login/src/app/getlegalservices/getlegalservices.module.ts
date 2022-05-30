import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetlegalservicesPageRoutingModule } from './getlegalservices-routing.module';

import { GetlegalservicesPage } from './getlegalservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetlegalservicesPageRoutingModule
  ],
  declarations: [GetlegalservicesPage]
})
export class GetlegalservicesPageModule {}
