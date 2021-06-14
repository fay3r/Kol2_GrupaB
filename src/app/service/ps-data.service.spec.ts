import { TestBed } from '@angular/core/testing';

import { PSDataService } from './ps-data.service';

describe('PSDataService', () => {
  let service: PSDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PSDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
