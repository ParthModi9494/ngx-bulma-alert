import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBulmaAlertModule } from '../../../ngx-bulma-alert/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxBulmaAlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
