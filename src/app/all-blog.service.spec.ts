import { TestBed } from '@angular/core/testing';

import { AllBlogService } from './all-blog.service';

describe('AllBlogService', () => {
  let service: AllBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
