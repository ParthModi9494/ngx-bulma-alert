import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBulmaAlertComponent } from './components/ngx-bulma-alert.component';
@NgModule({
  declarations: [NgxBulmaAlertComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [NgxBulmaAlertComponent],
})
export class NgxBulmaAlertModule {}
