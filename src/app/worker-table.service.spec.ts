import { TestBed } from '@angular/core/testing';

import { WorkerTableService } from './worker-table.service';

describe('WorkerTableService', () => {
  let service: WorkerTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
