import { TestBed } from '@angular/core/testing';

import { SocioeconomicInformationService } from './socioeconomic-information.service';

describe('SocioeconomicInformationService', () => {
  let service: SocioeconomicInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocioeconomicInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
