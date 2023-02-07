import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvaluationAnswerComponent } from './list-evaluation-answer.component';

describe('ListEvaluationAnswerComponent', () => {
  let component: ListEvaluationAnswerComponent;
  let fixture: ComponentFixture<ListEvaluationAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEvaluationAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEvaluationAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
