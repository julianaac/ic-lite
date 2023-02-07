import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentEvaluationComponent } from './form-student-evaluation.component';

describe('FormStudentEvaluationComponent', () => {
  let component: FormStudentEvaluationComponent;
  let fixture: ComponentFixture<FormStudentEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStudentEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStudentEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
