import { TestBed } from '@angular/core/testing';

import { ListCheckinStudentsService } from './list-checkin-students.service';

describe('ListCheckinStudentsService', () => {
  let service: ListCheckinStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCheckinStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
