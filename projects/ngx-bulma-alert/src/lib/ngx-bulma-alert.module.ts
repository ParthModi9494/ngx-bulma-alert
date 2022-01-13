import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBulmaAlertComponent } from './components/ngx-bulma-alert.component';

@NgModule({
  declarations: [NgxBulmaAlertComponent],
  imports: [MatDialogModule, BrowserAnimationsModule],
  exports: [NgxBulmaAlertComponent],
})
export class NgxBulmaAlertModule {}
