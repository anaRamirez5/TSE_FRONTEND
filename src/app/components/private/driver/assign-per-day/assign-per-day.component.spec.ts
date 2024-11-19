import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPerDayComponent } from './assign-per-day.component';

describe('AssignPerDayComponent', () => {
  let component: AssignPerDayComponent;
  let fixture: ComponentFixture<AssignPerDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignPerDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignPerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
