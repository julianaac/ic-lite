import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateReportComponent } from './form-template-report.component';

describe('FormTemplateReportComponent', () => {
  let component: FormTemplateReportComponent;
  let fixture: ComponentFixture<FormTemplateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplateReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemplateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
