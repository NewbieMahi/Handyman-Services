import { TestBed } from '@angular/core/testing';

import { ShippingInfoService } from './shipping-info.service';

describe('ShippingInfoService', () => {
  let service: ShippingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
