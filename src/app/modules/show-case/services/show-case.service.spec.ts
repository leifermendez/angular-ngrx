import { TestBed } from '@angular/core/testing';

import { ShowCaseService } from './show-case.service';

describe('ShowCaseService', () => {
  let service: ShowCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
