import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/public/login/login.module';
import { LayoutComponent } from './components/private/layout/layout.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './components/private/layout/layout.module';
import { DriverComponent } from './components/private/driver/driver.component';
import { DriverModule } from './components/private/driver/driver.module';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { TSEInterceptor } from './services/interceptors/http-request-interceptor';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    NoopAnimationsModule,
    LayoutModule,
    DriverModule,
    SharedModule,
  ],
  providers: [provideHttpClient(withInterceptors([TSEInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
