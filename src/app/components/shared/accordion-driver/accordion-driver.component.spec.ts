import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDriverComponent } from './accordion-driver.component';

describe('AccordionDriverComponent', () => {
  let component: AccordionDriverComponent;
  let fixture: ComponentFixture<AccordionDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionDriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
