import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriminaldefencePageRoutingModule } from './criminaldefence-routing.module';

import { CriminaldefencePage } from './criminaldefence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriminaldefencePageRoutingModule
  ],
  declarations: [CriminaldefencePage]
})
export class CriminaldefencePageModule {}
