import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandePageRoutingModule } from './demande-routing.module';

import { DemandePage } from './demande.page';
import { PannePageRoutingModule } from 'src/app/panne/panne-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DemandePage]
})
export class DemandePageModule {}
