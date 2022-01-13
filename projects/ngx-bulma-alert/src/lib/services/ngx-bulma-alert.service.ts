import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxBulmaAlertComponent } from '../components/ngx-bulma-alert.component';
export interface AlertOptions {
  type: 'success' | 'info' | 'warning' | 'danger';
  title: string;
  content: string;
  confirmText: string;
  cancelText: string;
}
@Injectable({
  providedIn: 'root',
})
export class NgxBulmaAlertService {
  constructor(private dialog: MatDialog) {}

  show(options: Partial<AlertOptions>) {
    this.dialog.open(NgxBulmaAlertComponent, {
      data: options,
      panelClass: 'alert-dialog-container',
    });
  }

  hide() {}
}
