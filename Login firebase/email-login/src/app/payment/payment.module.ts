import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  imports: [
    Angular4PaystackModule.forRoot('pk_test_b3c5a2b5d3eb1a8a9179d4dfacb409aa31c4379b'),
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
