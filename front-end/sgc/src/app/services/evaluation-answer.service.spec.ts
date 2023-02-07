import { TestBed } from '@angular/core/testing';

import { EvaluationAnswerService } from './evaluation-answer.service';

describe('EvaluationAnswerService', () => {
  let service: EvaluationAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
