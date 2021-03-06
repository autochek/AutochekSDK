import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceDetailPage } from './device-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceDetailPage
  },
  {
    path: 'view/:device',
    component: DeviceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceDetailPageRoutingModule {}
