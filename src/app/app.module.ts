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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    DriverModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
