import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorpayTransactionsComponent } from './razorpay-transactions.component';

describe('RazorpayTransactionsComponent', () => {
  let component: RazorpayTransactionsComponent;
  let fixture: ComponentFixture<RazorpayTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazorpayTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazorpayTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
