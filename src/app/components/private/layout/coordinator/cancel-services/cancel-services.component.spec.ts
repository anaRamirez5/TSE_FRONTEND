import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelServicesComponent } from './cancel-services.component';

describe('CancelServicesComponent', () => {
  let component: CancelServicesComponent;
  let fixture: ComponentFixture<CancelServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
