import { TestBed } from '@angular/core/testing';

import { ToserverService } from './toserver.service';

describe('ToserverService', () => {
  let service: ToserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
