import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertOptions } from '../services/ngx-bulma-alert.service';

@Component({
  selector: 'ngx-bulma-alert',
  templateUrl: './ngx-bulma-alert.component.html',
  styleUrls: ['./ngx-bulma-alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxBulmaAlertComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public options: AlertOptions) {}

  ngOnInit(): void {}

  getHeaderClass(type: string) {
    switch (type) {
      case 'success':
        return 'has-background-success';
      case 'info':
        return 'has-background-info';
      case 'warning':
        return 'has-background-warning';
      case 'danger':
        return 'has-background-danger';
      default:
        return 'has-background-info';
    }
  }

  getButtonClass(type: string) {
    switch (type) {
      case 'success':
        return 'is-success';
      case 'info':
        return 'is-info';
      case 'warning':
        return 'is-warning';
      case 'danger':
        return 'is-danger';
      default:
        return 'is-info';
    }
  }
}
