import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHeaderPageRoutingModule } from './profile-header-routing.module';

import { ProfileHeaderPage } from './profile-header.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfileHeaderPageRoutingModule
    ],
    exports: [
        ProfileHeaderPage
    ],
    declarations: [ProfileHeaderPage]
})
export class ProfileHeaderPageModule {}
