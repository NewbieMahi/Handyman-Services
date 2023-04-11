import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveMaintanceComponent } from './predictive-maintance.component';

describe('PredictiveMaintanceComponent', () => {
  let component: PredictiveMaintanceComponent;
  let fixture: ComponentFixture<PredictiveMaintanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictiveMaintanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictiveMaintanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
