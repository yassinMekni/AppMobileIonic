import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotaffPageRoutingModule } from './notaff-routing.module';

import { NotaffPage } from './notaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotaffPageRoutingModule
  ],
  declarations: [NotaffPage]
})
export class NotaffPageModule {}
