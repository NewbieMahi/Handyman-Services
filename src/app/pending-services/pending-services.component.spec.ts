import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingServicesComponent } from './pending-services.component';

describe('PendingServicesComponent', () => {
  let component: PendingServicesComponent;
  let fixture: ComponentFixture<PendingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
