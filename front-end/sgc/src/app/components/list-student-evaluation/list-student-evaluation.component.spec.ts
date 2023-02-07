import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentEvaluationComponent } from './list-student-evaluation.component';

describe('ListStudentEvaluationComponent', () => {
  let component: ListStudentEvaluationComponent;
  let fixture: ComponentFixture<ListStudentEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudentEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudentEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
