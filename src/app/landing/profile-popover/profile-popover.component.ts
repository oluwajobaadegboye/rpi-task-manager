import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-profile-popover',
  templateUrl: './profile-popover.component.html',
  styleUrls: ['./profile-popover.component.scss'],
})
export class ProfilePopoverComponent implements OnInit {

  @Input() popoverController: PopoverController;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.popoverController.dismiss();
    this.router.navigate(['login']);
  }
}
