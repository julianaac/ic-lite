import { TestBed } from '@angular/core/testing';

import { CoordenadorProjetoService } from './coordenador-projeto.service';

describe('CoordenadorProjetoService', () => {
  let service: CoordenadorProjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordenadorProjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
