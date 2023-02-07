import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentCheckinComponent } from './list-student-checkin.component';

describe('ListStudentCheckinComponent', () => {
  let component: ListStudentCheckinComponent;
  let fixture: ComponentFixture<ListStudentCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudentCheckinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudentCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
