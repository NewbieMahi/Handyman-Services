import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerChartComponent } from './worker-chart.component';

describe('WorkerChartComponent', () => {
  let component: WorkerChartComponent;
  let fixture: ComponentFixture<WorkerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
