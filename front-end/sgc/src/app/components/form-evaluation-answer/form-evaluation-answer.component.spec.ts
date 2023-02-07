import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationAnswerComponent } from './form-evaluation-answer.component';

describe('EvaluationAnswerComponent', () => {
  let component: EvaluationAnswerComponent;
  let fixture: ComponentFixture<EvaluationAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationAnswerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EvaluationAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
