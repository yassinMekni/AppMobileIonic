import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepannagePage } from './depannage.page';

const routes: Routes = [
  {
    path: '',
    component: DepannagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepannagePageRoutingModule {}
