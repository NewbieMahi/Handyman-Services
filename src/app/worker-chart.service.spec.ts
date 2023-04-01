import { TestBed } from '@angular/core/testing';

import { WorkerChartService } from './worker-chart.service';

describe('WorkerChartService', () => {
  let service: WorkerChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
