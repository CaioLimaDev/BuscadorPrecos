import {TestBed} from '@angular/core/testing';

import {MaptilerService} from './maptiler.service';

describe('MaptilerService', () => {
  let service: MaptilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaptilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
