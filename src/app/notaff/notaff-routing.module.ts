import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotaffPage } from './notaff.page';

const routes: Routes = [
  {
    path: '',
    component: NotaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotaffPageRoutingModule {}
