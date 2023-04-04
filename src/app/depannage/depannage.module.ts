import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepannagePageRoutingModule } from './depannage-routing.module';

import { DepannagePage } from './depannage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepannagePageRoutingModule
  ],
  declarations: [DepannagePage]
})
export class DepannagePageModule {}
