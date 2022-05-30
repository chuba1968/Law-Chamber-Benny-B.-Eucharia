import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedfivemillionPageRoutingModule } from './proceedfivemillion-routing.module';

import { ProceedfivemillionPage } from './proceedfivemillion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedfivemillionPageRoutingModule
  ],
  declarations: [ProceedfivemillionPage]
})
export class ProceedfivemillionPageModule {}
