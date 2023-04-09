import { TestBed } from '@angular/core/testing';

import { BloggingService } from './blogging.service';

describe('BloggingService', () => {
  let service: BloggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
