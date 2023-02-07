import { TestBed } from '@angular/core/testing';

import { TypeNoticeService } from './type-notice.service';

describe('TypeNoticeService', () => {
  let service: TypeNoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeNoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
