import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportCoordComponent } from './list-report-coord.component';

describe('ListReportCoordComponent', () => {
  let component: ListReportCoordComponent;
  let fixture: ComponentFixture<ListReportCoordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReportCoordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReportCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
