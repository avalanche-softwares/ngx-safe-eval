import { TestBed } from '@angular/core/testing';

import { NgsafeEvalService } from './ng-safe-eval.service';

describe('NgsafeEvalService', () => {
  let service: NgsafeEvalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgsafeEvalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
