import { TestBed } from '@angular/core/testing';

import { TaskSprintService } from './task-sprint.service';

describe('TaskSprintService', () => {
  let service: TaskSprintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSprintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
