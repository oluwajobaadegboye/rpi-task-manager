import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileHeaderPage } from './profile-header.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHeaderPageRoutingModule {}
