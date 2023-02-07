import { TestBed } from '@angular/core/testing';

import { TypeTechnologyService } from './type-technology.service';

describe('TypeTechnologyService', () => {
  let service: TypeTechnologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeTechnologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
