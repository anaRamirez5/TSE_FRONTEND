import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdditionalComponent } from './services-additional.component';

describe('ServicesAdditionalComponent', () => {
  let component: ServicesAdditionalComponent;
  let fixture: ComponentFixture<ServicesAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesAdditionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
