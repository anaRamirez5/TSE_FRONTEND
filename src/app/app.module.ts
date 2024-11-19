import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/public/login/login.module';
import { LayoutModule } from './components/private/layout/layout.module';
import { DriverModule } from './components/private/driver/driver.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TSEInterceptor } from './services/interceptors/http-request-interceptor';
import { SharedModule } from './components/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    DriverModule,
    SharedModule,
    CommonModule,
  ],
  providers: [provideHttpClient(withInterceptors([TSEInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
