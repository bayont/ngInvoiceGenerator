import { TestBed } from '@angular/core/testing';

import { CompanyDetailsHttpService } from './company-details-http.service';

describe('CompanyDetailsHttpService', () => {
  let service: CompanyDetailsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyDetailsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
