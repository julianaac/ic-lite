import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeReportComponent } from './list-type-report.component';

describe('ListTypeReportComponent', () => {
  let component: ListTypeReportComponent;
  let fixture: ComponentFixture<ListTypeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTypeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
