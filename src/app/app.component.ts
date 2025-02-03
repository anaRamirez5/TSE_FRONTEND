import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserActivityServiceService } from './core/services/user-activity-service.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TSE';
  apiUrl!: string;
  isSpinnerVisible = false;
  constructor(private userActivityService: UserActivityServiceService) {}
  ngOnInit() {
    this.userActivityService.startMonitoring();
  }

  ngOnDestroy() {
    this.userActivityService.stopMonitoring();
  }
}
