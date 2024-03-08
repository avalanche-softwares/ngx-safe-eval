import { TestBed } from '@angular/core/testing';

import { NgSafeEvalService } from './ng-safe-eval.service';

describe('NgSafeEvalService', () => {
  let service: NgSafeEvalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSafeEvalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
