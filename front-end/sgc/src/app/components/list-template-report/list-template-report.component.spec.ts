import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemplateReportComponent } from './list-template-report.component';

describe('ListTemplateReportComponent', () => {
  let component: ListTemplateReportComponent;
  let fixture: ComponentFixture<ListTemplateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTemplateReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTemplateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
