import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgxBulmaAlertService } from '../services/ngx-bulma-alert.service';

@Component({
  selector: 'ngx-bulma-alert',
  templateUrl: './ngx-bulma-alert.component.html',
  styleUrls: ['./ngx-bulma-alert.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate(200, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class NgxBulmaAlertComponent implements OnInit {
  constructor(public ngxBulmaAlertService: NgxBulmaAlertService) {}
  ngOnInit(): void {}

  getClass(type: string | undefined) {
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
