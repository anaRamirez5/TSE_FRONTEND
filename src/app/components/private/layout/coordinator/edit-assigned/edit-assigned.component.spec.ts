import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAsignComponent } from './edit-assigned.component';

describe('EditAsignComponent', () => {
  let component: EditAsignComponent;
  let fixture: ComponentFixture<EditAsignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAsignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
