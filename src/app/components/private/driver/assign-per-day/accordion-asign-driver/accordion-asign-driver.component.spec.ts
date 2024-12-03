import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAsignDriverComponent } from './accordion-asign-driver.component';

describe('AccordionAsignDriverComponent', () => {
  let component: AccordionAsignDriverComponent;
  let fixture: ComponentFixture<AccordionAsignDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionAsignDriverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionAsignDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
