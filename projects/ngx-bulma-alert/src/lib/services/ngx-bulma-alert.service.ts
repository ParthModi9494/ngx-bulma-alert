import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export interface AlertOptions {
  type: 'success' | 'info' | 'warning' | 'danger';
  title: string;
  content: string;
  confirmText: string;
  cancelText: string;
}

export class AlertRef {
  alertOptions: Partial<AlertOptions>;
  private _dismissEvent: Subject<boolean> = new Subject<boolean>();
  onAlertDismiss: Observable<boolean> = new Observable<boolean>();
  private _isActive: boolean = false;
  public get isActive(): boolean {
    return this._isActive;
  }

  constructor(options: Partial<AlertOptions>) {
    this.alertOptions = options;
    this._isActive = true;
    this.onAlertDismiss = this._dismissEvent.asObservable();
  }

  public close(confirmed: boolean) {
    this._isActive = false;
    this._dismissEvent.next(confirmed);
    this._dismissEvent.complete();
    this._dismissEvent.unsubscribe();
  }
}

@Injectable({
  providedIn: 'root',
})
export class NgxBulmaAlertService {
  alertRef: AlertRef;
  constructor() {}

  createAlert(options: Partial<AlertOptions>) {
    this.alertRef = new AlertRef(options);
    return this.alertRef;
  }
}
