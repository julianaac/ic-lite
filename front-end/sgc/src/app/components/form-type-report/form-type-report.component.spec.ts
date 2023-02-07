import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTypeReportComponent } from './form-type-report.component';

describe('FormTypeReportComponent', () => {
  let component: FormTypeReportComponent;
  let fixture: ComponentFixture<FormTypeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTypeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTypeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
