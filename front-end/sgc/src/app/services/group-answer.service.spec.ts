import { TestBed } from '@angular/core/testing';

import { GroupAnswerService } from './group-answer.service';

describe('GroupAnswerService', () => {
  let service: GroupAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
