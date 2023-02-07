import { TestBed } from '@angular/core/testing';

import { GradeMemberGroupService } from './grade-member-group.service';

describe('GradeMemberGroupService', () => {
  let service: GradeMemberGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeMemberGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
