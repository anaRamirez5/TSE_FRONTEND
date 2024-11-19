import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPerDriverComponent } from './history-per-driver.component';

describe('HistoryPerDriverComponent', () => {
  let component: HistoryPerDriverComponent;
  let fixture: ComponentFixture<HistoryPerDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryPerDriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPerDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
