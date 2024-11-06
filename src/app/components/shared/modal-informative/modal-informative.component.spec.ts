import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformativeComponent } from './modal-informative.component';

describe('ModalInformativeComponent', () => {
  let component: ModalInformativeComponent;
  let fixture: ComponentFixture<ModalInformativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalInformativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInformativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
