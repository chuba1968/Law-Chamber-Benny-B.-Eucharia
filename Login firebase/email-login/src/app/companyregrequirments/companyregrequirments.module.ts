import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyregrequirmentsPageRoutingModule } from './companyregrequirments-routing.module';

import { CompanyregrequirmentsPage } from './companyregrequirments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyregrequirmentsPageRoutingModule
  ],
  declarations: [CompanyregrequirmentsPage]
})
export class CompanyregrequirmentsPageModule {}
