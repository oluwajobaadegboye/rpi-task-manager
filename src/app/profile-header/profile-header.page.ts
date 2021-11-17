import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {ProfilePopoverComponent} from '../landing/profile-popover/profile-popover.component';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.page.html',
  styleUrls: ['./profile-header.page.scss'],
})
export class ProfileHeaderPage implements OnInit {
  @Input() backUrl = 'landing';
  @Input() hasBackButton = false;
  @Input() title = 'Task Manager';

  constructor(public popoverController: PopoverController) {
  }

  ngOnInit() {
  }

  async presentProfilePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      cssClass: 'app-profile-popover-class',
      event: ev,
      translucent: true,
      animated: true,
      componentProps: {
        popoverController: this.popoverController
      }
    });
    await popover.present();
  }

}
