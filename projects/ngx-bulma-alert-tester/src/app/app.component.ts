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
    this.alertService
      .createAlert({
        type: 'warning',
        title: 'Confirm',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        confirmText: 'Yepp',
        cancelText: 'No',
      })
      .onAlertDismiss.subscribe((res) => {
        console.log(res);
      });
  }
}
