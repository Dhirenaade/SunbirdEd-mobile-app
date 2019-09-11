import { Component } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterLinks } from '@app/app/app.constant';

@Component({
  selector: 'sb-insufficient-storage-popup',
  templateUrl: 'sb-insufficient-storage-popup.html'
})
export class SbInsufficientStoragePopupComponent {
  sbPopoverHeading = '';
  sbPopoverMessage = '';

  constructor(private navParams: NavParams,
    private popoverCtrl: PopoverController,
    private router: Router) {
    this.initParams();
  }

  private initParams() {
    this.sbPopoverHeading = this.navParams.get('sbPopoverHeading');
    this.sbPopoverMessage = this.navParams.get('sbPopoverMessage');
  }

  closePopover() {
    this.popoverCtrl.dismiss();
  }

  navigateToStorageSettings() {
    this.popoverCtrl.dismiss();
    // this.app.getActiveNav().push(StorageSettingsPage);
    this.router.navigate([RouterLinks.STORAGE_SETTINGS]);
  }

}