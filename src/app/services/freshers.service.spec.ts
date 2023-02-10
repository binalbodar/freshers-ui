import { TestBed } from '@angular/core/testing';

import { FreshersService } from './freshers.service';

describe('FreshersService', () => {
  let service: FreshersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreshersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
