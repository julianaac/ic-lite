import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAbsenceComponent } from './form-absence.component';

describe('FormAbsenceComponent', () => {
  let component: FormAbsenceComponent;
  let fixture: ComponentFixture<FormAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAbsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
