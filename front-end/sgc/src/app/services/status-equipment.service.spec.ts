import { TestBed } from '@angular/core/testing';

import { StatusEquipmentService } from './status-equipment.service';

describe('StatusEquipmentService', () => {
  let service: StatusEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
