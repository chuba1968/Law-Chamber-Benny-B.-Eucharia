import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplybailPageRoutingModule } from './applybail-routing.module';

import { ApplybailPage } from './applybail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplybailPageRoutingModule
  ],
  declarations: [ApplybailPage]
})
export class ApplybailPageModule {}
