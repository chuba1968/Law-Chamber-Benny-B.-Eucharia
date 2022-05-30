import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectionpetitionPageRoutingModule } from './electionpetition-routing.module';

import { ElectionpetitionPage } from './electionpetition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectionpetitionPageRoutingModule
  ],
  declarations: [ElectionpetitionPage]
})
export class ElectionpetitionPageModule {}
