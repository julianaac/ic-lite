import { TestBed } from '@angular/core/testing';

import { SingleAnswerService } from './single-answer.service';

describe('SingleAnswerService', () => {
  let service: SingleAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
