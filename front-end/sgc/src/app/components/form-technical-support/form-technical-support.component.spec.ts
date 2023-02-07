import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTechnicalSupportComponent } from './form-technical-support.component';

describe('FormTechnicalSupportComponent', () => {
  let component: FormTechnicalSupportComponent;
  let fixture: ComponentFixture<FormTechnicalSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTechnicalSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTechnicalSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
