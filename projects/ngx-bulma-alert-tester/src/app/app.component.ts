import { Component } from '@angular/core';
import { NgxBulmaAlertService } from 'projects/ngx-bulma-alert/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-bulma-alert-tester';
  constructor(private alertService: NgxBulmaAlertService) {}

  open() {
    this.alertService.show({
      type: 'info',
      title: 'Some title',
      content: 'Some content',
      confirmText: 'Yes',
      cancelText: 'Cancel',
    });
  }
}
