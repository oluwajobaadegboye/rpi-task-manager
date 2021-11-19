import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import {ProfileHeaderPageModule} from '../profile-header/profile-header.module';
import {TaskDetailPageModule} from '../tasks/task-detail/task-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    ProfileHeaderPageModule,
    TaskDetailPageModule
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
