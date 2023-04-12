import { TestBed } from '@angular/core/testing';

import { SkiResortsService } from './ski-resorts.service';

describe('SkiResortsService', () => {
  let service: SkiResortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkiResortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
