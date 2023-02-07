import { TestBed } from '@angular/core/testing';

import { TemplateReportService } from './template-report.service';

describe('TemplateReportService', () => {
  let service: TemplateReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
