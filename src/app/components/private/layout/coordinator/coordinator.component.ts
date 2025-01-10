import { Component, OnInit } from '@angular/core';
import { CoordinatorService } from '../../../../core/services/coordinator/coordinator.service';
import { stadistic } from '../../../../core/models/coordinator/coordinator.interface';
import { BodyResponse } from '../../../../core/models/shared/body-response.interface';
import { stadisticget } from '../../../../core/models/shared/shared.interface';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrl: './coordinator.component.css',
})
export class CoordinatorComponent implements OnInit {
  constructor(private programmerService: CoordinatorService) {}
  statistics!: stadistic;
  ngOnInit(): void {
    const today = new Date();
    this.getStadistic(today.toISOString().split('T')[0]);
  }
  getStadistic(today: string) {
    const payload: stadisticget = {
      indicator_date: today,
    };
    this.programmerService.getStadictic(payload).subscribe({
      next: (response: BodyResponse<stadistic>) => {
        if (response.code === 200) {
          this.statistics = response.data;
        } else {
        }
      },
      error: () => {},
      complete: () => {},
    });
  }
}
