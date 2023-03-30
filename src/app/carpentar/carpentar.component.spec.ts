import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpentarComponent } from './carpentar.component';

describe('CarpentarComponent', () => {
  let component: CarpentarComponent;
  let fixture: ComponentFixture<CarpentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpentarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
