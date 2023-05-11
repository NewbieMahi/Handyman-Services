import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookingServicesComponent } from './all-booking-services.component';

describe('AllBookingServicesComponent', () => {
  let component: AllBookingServicesComponent;
  let fixture: ComponentFixture<AllBookingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBookingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBookingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
